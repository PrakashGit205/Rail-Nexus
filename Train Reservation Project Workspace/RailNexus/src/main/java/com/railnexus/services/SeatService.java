package com.railnexus.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.SeatDao;
import com.railnexus.dao.TrainDao;
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
	
	@Override
	public List<Seat> showAvailableSeats(Long trainNo) {
		
		return dao.findByTrainId(trainNo);
	}
	
	
}
