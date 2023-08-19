package com.railnexus.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.FairDao;
import com.railnexus.dao.SeatDao;
import com.railnexus.dao.TrainDao;
import com.railnexus.pojos.Fair;
import com.railnexus.pojos.Seat;
import com.railnexus.pojos.enums.ClassType;
import com.railnexus.services.interfaces.IFairService;

@Service
@Transactional
public class FairService implements IFairService {
	
	@Autowired
	private FairDao dao;
	
	@Autowired
	private SeatDao seatdao;
	
	@Autowired
	private TrainDao trainDao;

	@Override
	public List<Fair> showFairByTrainId(Long trainNo) {
		// TODO Auto-generated method stub
		return dao.findByTrainId(trainNo);
	}

	@Override
	public List<Fair> showBoogieFair(Long trainNo, String classType) {
		// TODO Auto-generated method stub
		return dao.findByClassTypeAndTrainId(ClassType.valueOf(classType.toUpperCase()), trainNo);
	}

	@Override
	public List<Fair> showBySourceAndDestination(Long sourceId, Long destinationId) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
