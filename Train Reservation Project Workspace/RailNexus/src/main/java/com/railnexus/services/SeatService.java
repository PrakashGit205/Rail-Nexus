package com.railnexus.services;

import java.time.LocalDate;
import java.util.List;
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
import com.railnexus.dto.response.DistanceResponseDTO;
import com.railnexus.dto.response.LiveSeatResponse;
import com.railnexus.dto.response.RunningTrainResponseDTO;
import com.railnexus.dto.response.SeatResponseDTO;
import com.railnexus.exception.ResourceNotFoundException;
import com.railnexus.pojos.Distance;
import com.railnexus.pojos.Fair;
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
	private  ModelMapper
	 mapper;
	
	@Override
	public List<SeatResponseDTO> showAvailableSeats(Long trainNo) {
		
		return dao.findByTrainId(trainNo).stream().map(train -> mapper.map(train, SeatResponseDTO.class)).toList();
	}

	public List<LiveSeatResponse> showAvailableSeats(Long trainNo,LocalDate originDate,Long sourceId,Long originId){
		System.out.println(liveDao.getTotalSeatsByClassAndDate(originDate, trainNo));
		

		    List<Object[]> queryResult = liveDao.getTotalSeatsByClassAndDate(originDate, trainNo);
		    List<Fair> fairs = fairDao.findByTrainId(trainNo);
		    
		    List<Distance> distance = distanceDao.findByOriginStationIdAndDestinationStationIdOrDestinationStationIdAndOriginStationId(sourceId, originId, originId, sourceId);
		    DistanceResponseDTO distance2=  distance.stream().map(d->mapper.map(d, DistanceResponseDTO.class)).findFirst().get();
		    System.out.println(distance2);
//		    System.out.println(distance);
		    List<LiveSeatResponse> responseList = queryResult.stream()
		            .map(row -> new LiveSeatResponse((String) row[0], (LocalDate) row[1], (Long) row[2]))
		            .collect(Collectors.toList());
//		System.out.println(responseList);
//		 responseList

List<LiveSeatResponse> combinedList = responseList.stream()
    .map(response -> {
        Fair fair = fairs.stream()
            .filter(f -> f.getClassType().equals(response.getClassType()) && f.getTrain().getId().equals(trainNo))
            .findFirst()
            .orElse(null);

        if (fair != null) {
            // Create a new LiveSeatResponse object with price information
            return new LiveSeatResponse(
                response.getClassType(),
                response.getDestinationTime(),
                response.getAvailableSeats(),
                (fair.getFair()/100) * distance2.getDistance()
            );
           
        } else {
            return response; // No matching fair found, return the original response
        }
    })
    .collect(Collectors.toList());
		
//		System.out.println("this is combined list of seat"+combinedList);
		
		
		
//		List<LiveSeatResponse> responseList2 = responseList.stream().map(train -> mapper.map(train, LiveSeatResponse.class)).toList();
//		List<LiveSeatResponse> list=	liveDao.getTotalSeatsByClassAndDate(originDate, trainNo).stream().map(train -> mapper.map(train, LiveSeatResponse.class)).toList();
//		System.out.println(responseList);
		return combinedList;
	}
	
	
}
