package com.railnexus.services;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.DistanceDao;
import com.railnexus.dao.FairDao;
import com.railnexus.dao.LiveSeatDao;
import com.railnexus.dao.SeatDao;
import com.railnexus.dao.TrainDao;
import com.railnexus.dto.BookSeatRequestDTO;
import com.railnexus.dto.response.BookedSeatDTO;
import com.railnexus.dto.response.DistanceResponseDTO;
import com.railnexus.dto.response.LiveSeatResponse;
import com.railnexus.dto.response.RunningTrainResponseDTO;
import com.railnexus.dto.response.SeatResponseDTO;
import com.railnexus.exception.ResourceNotFoundException;
import com.railnexus.pojos.Distance;
import com.railnexus.pojos.Fair;
import com.railnexus.pojos.LiveSeat;
import com.railnexus.pojos.Seat;
import com.railnexus.services.interfaces.ISeatService;

@Service
@Transactional
public class SeatService implements ISeatService {

	@Autowired
	private SeatDao dao;
	@Autowired
	private FairDao fairDao;
	@Autowired
	private LiveSeatDao liveDao;
	@Autowired
	private DistanceDao distanceDao;
	@Autowired
	private TrainDao trainDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<SeatResponseDTO> showAvailableSeats(Long trainNo) {

		return dao.findByTrainId(trainNo).stream().map(train -> mapper.map(train, SeatResponseDTO.class)).toList();
	}

	public List<LiveSeatResponse> showAvailableSeats(Long trainNo, LocalDate originDate, Long sourceId, Long originId) {
		System.out.println(liveDao.getTotalSeatsByClassAndDate(originDate, trainNo));

		List<Object[]> queryResult = liveDao.getTotalSeatsByClassAndDate(originDate, trainNo);
		List<Fair> fairs = fairDao.findByTrainId(trainNo);

		List<Distance> distance = distanceDao
				.findByOriginStationIdAndDestinationStationIdOrDestinationStationIdAndOriginStationId(sourceId,
						originId, originId, sourceId);
		DistanceResponseDTO distance2 = distance.stream().map(d -> mapper.map(d, DistanceResponseDTO.class)).findFirst()
				.get();
		System.out.println(distance2);
//		    System.out.println(distance);
		List<LiveSeatResponse> responseList = queryResult.stream()
				.map(row -> new LiveSeatResponse((String) row[0], (LocalDate) row[1], (Long) row[2]))
				.collect(Collectors.toList());
//		System.out.println(responseList);
//		 responseList

		List<LiveSeatResponse> combinedList = responseList.stream().map(response -> {
			Fair fair = fairs.stream().filter(
					f -> f.getClassType().equals(response.getClassType()) && f.getTrain().getId().equals(trainNo))
					.findFirst().orElse(null);

			if (fair != null) {
				// Create a new LiveSeatResponse object with price information
				return new LiveSeatResponse(response.getId(), response.getClassType(), response.getDestinationTime(),
						response.getAvailableSeats(), (fair.getFair() / 100) * distance2.getDistance());

			} else {
				return response; // No matching fair found, return the original response
			}
		}).collect(Collectors.toList());

//		System.out.println("this is combined list of seat"+combinedList);

//		List<LiveSeatResponse> responseList2 = responseList.stream().map(train -> mapper.map(train, LiveSeatResponse.class)).toList();
//		List<LiveSeatResponse> list=	liveDao.getTotalSeatsByClassAndDate(originDate, trainNo).stream().map(train -> mapper.map(train, LiveSeatResponse.class)).toList();
//		System.out.println(responseList);
		return combinedList;
	}

	public BookedSeatDTO bookSeat(BookSeatRequestDTO dto) {
		List<LiveSeat> liveSeat = null;
		BookedSeatDTO seatBookes = null;
		System.out.println(dto);
		Map<String, Integer> bogieSeatSumMap = new HashMap<>();
		if (dto.getSeatType() == null) {
			liveSeat = liveDao.findByClassTypeAndDestinationTimeAndTrainId(dto.getClassType(), dto.getOriginDate(),
					dto.getTrainId());
			Integer totalSeats = liveSeat.stream().filter((a) -> !(a.getSeatType().equals("DISABLE")))
					.mapToInt(LiveSeat::getAvailableSeats).sum();
//			if total seat available for this type train and date is greater than 0 then simply book the ticket whihc is not for disable people 
			// if it is not then also take seats of people
			if (totalSeats > 0) {
				// first i need than in whihc boogie how much seat is available
				Map<String, List<LiveSeat>> groupedByBogie = liveSeat.stream()
						.filter(seat -> !"DISABLE".equals(seat.getSeatType()))
						.collect(Collectors.groupingBy(t -> t.getBoogie()));
				seatBookes = getBoogieAvaialbleSeat(groupedByBogie);

				   System.out.println( "if total seat greater than 0" +seatBookes);
//				   here boogieSeatMap  will store the boogie number and sum of seat available  same for all else
			}

			else {

				Map<String, List<LiveSeat>> groupedByBogie = liveSeat.stream()
						.collect(Collectors.groupingBy(t -> t.getBoogie()));

				seatBookes = getBoogieAvaialbleSeat(groupedByBogie);
				   System.out.println( "if total seat less than 0" +seatBookes);

			}

		} else {
			liveSeat = liveDao.findByClassTypeAndDestinationTimeAndTrainIdAndSeatType(dto.getClassType(),
					dto.getOriginDate(), dto.getTrainId(), dto.getSeatType());
			Integer totalSeats = liveSeat.stream().mapToInt(LiveSeat::getAvailableSeats).sum();
			if (totalSeats > 0) {
				Map<String, List<LiveSeat>> groupedByBogie = liveSeat.stream()
						.collect(Collectors.groupingBy(t -> t.getBoogie()));
				seatBookes = getBoogieAvaialbleSeat(groupedByBogie);
			}
			   System.out.println( "total seat by class date train and seattype" +bogieSeatSumMap);
		}

		return seatBookes;

	}

	private BookedSeatDTO getBoogieAvaialbleSeat(Map<String, List<LiveSeat>> groupedByBogie) {
		Map<String, Integer> bogieSeatSumMap = new HashMap<>();
		int leftSeats = 0;
		LiveSeat seatToBook = null;
		BookedSeatDTO bookedSeat = null;
		for (Map.Entry<String, List<LiveSeat>> entry : groupedByBogie.entrySet()) {
//			   System.out.println(entry);
			int sumSeats = entry.getValue().stream().mapToInt(LiveSeat::getAvailableSeats).sum();
			bogieSeatSumMap.put(entry.getKey(), sumSeats);
			if(sumSeats > 0) {
				for (LiveSeat seat : entry.getValue()) {
					if(seat.getAvailableSeats()>0) {
						seatToBook = seat;
						System.out.println(seat);
						break;
					}
				}
				if(seatToBook !=null) {
					System.out.println("seat booked " + seatToBook);
					bookedSeat = mapper.map(seatToBook, BookedSeatDTO.class);
					bookedSeat.setSeatNo(seatToBook.getSeatType().toCharArray()[0]+""+seatToBook.getAvailableSeats());
							seatToBook.setAvailableSeats(seatToBook.getAvailableSeats()-1);
							liveDao.save(seatToBook);
					break;
				}
			}
			
			leftSeats = leftSeats + sumSeats;
		}
		
		

		return bookedSeat;
	}

}
