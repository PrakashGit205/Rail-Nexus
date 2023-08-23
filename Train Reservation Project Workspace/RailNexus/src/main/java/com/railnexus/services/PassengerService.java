package com.railnexus.services;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.PassengerDao;
import com.railnexus.dao.SeatDao;
import com.railnexus.dao.StationDao;
import com.railnexus.dao.TrainDao;
import com.railnexus.dto.AddPassengerDTO;
import com.railnexus.dto.response.PassengerResponseDTO;
import com.railnexus.pojos.Passenger;
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

	public Passenger addPassenger(AddPassengerDTO dto) {
	
	Passenger psngrToAdd = mapper.map(dto, Passenger.class);
	
		return dao.save(psngrToAdd);
	}
	public Passenger  updatePassenger(AddPassengerDTO dto) {
		Passenger psngrToAdd = mapper.map(dto, Passenger.class);
		return dao.save(psngrToAdd);
	}
}
