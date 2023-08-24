package com.railnexus.services;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.PassengerDao;
import com.railnexus.dao.SeatDao;
import com.railnexus.dao.StationDao;
import com.railnexus.dao.TrainDao;
import com.railnexus.dao.UserDao;
import com.railnexus.dto.AddPassengerDTO;
import com.railnexus.dto.response.PassengerResponseDTO;
import com.railnexus.exception.ResourceNotFoundException;
import com.railnexus.pojos.LiveSeat;
import com.railnexus.pojos.Passenger;
import com.railnexus.pojos.Seat;
import com.railnexus.pojos.Station;
import com.railnexus.pojos.Train;
import com.railnexus.pojos.User;
import com.railnexus.services.interfaces.IPassengerService;
import com.railnexus.services.interfaces.IStationService;

@Service
@Transactional
public class PassengerService implements IPassengerService {

	@Autowired
	private PassengerDao dao;
	@Autowired
	private TrainDao trainDao;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private StationDao stationDao;
	@Autowired
	private SeatDao seatDao;
	@Autowired
	private UserDao userDao;

	public Passenger addPassenger(AddPassengerDTO dto) {

		Passenger passenger = mapper.map(dto, Passenger.class);
		passenger.setPaymentStatus(false); // Set initial payment status
		passenger.setBookingDate(LocalDate.now());
		Train train = trainDao.findById(dto.getTrainId())
				.orElseThrow(() -> new ResourceNotFoundException("train not found"));
		Station sourceStation = stationDao.findById(dto.getSourceStationId())
				.orElseThrow(() -> new ResourceNotFoundException("source station not found"));
		Station destinationStation = stationDao.findById(dto.getDestinationStationId())
				.orElseThrow(() -> new ResourceNotFoundException("destination station not found"));
		User user = userDao.findById(dto.getUserId())
				.orElseThrow(() -> new ResourceNotFoundException("User not found"));

		// Create and populate the Seat entity
		LiveSeat seat = new LiveSeat();
		seat.setClassType(dto.getClassType());
		seat.setSeatType(dto.getSeatType());
	
//		    seat.setFair(dto.getFair());
		// You may need to set other seat details as well
//		seatDao.save(seat); // Save the seat entity
//
//		// Add the seat to the passenger's list of seats
//		passenger.getSeats().add(seat);
//		
//		// Set the passenger for the seat
//		seat.setPassenger(passenger);

		// Set the Train, Source Station, and Destination Station for the passenger
		passenger.setUser(user);
		passenger.setTrain(train);
		passenger.setSourceStation(sourceStation);
		passenger.setDestinationStation(destinationStation);

		return dao.save(passenger);
	}

	public Passenger updatePassenger(AddPassengerDTO dto) {
		Passenger psngrToAdd = mapper.map(dto, Passenger.class);
		return dao.save(psngrToAdd);
	}
}
