package com.railnexus.services;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.SeatDao;
import com.railnexus.dao.TrainDao;
import com.railnexus.dto.response.RunningTrainResponseDTO;
import com.railnexus.dto.response.SeatResponseDTO;
import com.railnexus.exception.ResourceNotFoundException;
import com.railnexus.pojos.Seat;
import com.railnexus.services.interfaces.ISeatService;
@Service
@Transactional
public class SeatService implements ISeatService {

	@Autowired
	private SeatDao dao;
	
	@Autowired
	private TrainDao trainDao;
	
	@Autowired
	private  ModelMapper
	 mapper;
	
	@Override
	public List<SeatResponseDTO> showAvailableSeats(Long trainNo) {
		
		return dao.findByTrainId(trainNo).stream().map(train -> mapper.map(train, SeatResponseDTO.class)).toList();
	}
	
	
}
