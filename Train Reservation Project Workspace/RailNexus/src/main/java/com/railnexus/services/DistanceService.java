package com.railnexus.services;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.DistanceDao;
import com.railnexus.dao.PassengerDao;
import com.railnexus.dao.TrainDao;
import com.railnexus.pojos.Distance;

@Service
@Transactional
public class DistanceService {
	@Autowired
	private DistanceDao dao;
	@Autowired
	private TrainDao trainDao;
	@Autowired
	private ModelMapper mapper;
	
    public Distance findybyOriginAndDestination(
	        Long originStationId1, Long destinationStationId1
	    ){
    	return dao.findByOriginStationIdAndDestinationStationIdOrDestinationStationIdAndOriginStationId(originStationId1, destinationStationId1,destinationStationId1,originStationId1).get(0);
    }
}
