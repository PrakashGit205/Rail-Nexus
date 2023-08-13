package com.railnexus.services;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.FairDao;
import com.railnexus.dao.StationDao;
import com.railnexus.dao.TrainDao;
import com.railnexus.dto.AddTrainDTO;
import com.railnexus.exception.ResourceNotFoundException;
import com.railnexus.pojos.Station;
import com.railnexus.pojos.Train;
import com.railnexus.services.interfaces.ITrainService;

@Service
@Transactional
public class TrainService implements ITrainService{
	
	@Autowired
	private TrainDao dao;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private StationDao stationDao;
	@Autowired
	private FairDao fairDao;
	
	public Train addTrain(AddTrainDTO train) {
		
		Station originStation = stationDao.findById(train.getOriginStationId()).orElseThrow(() -> new ResourceNotFoundException("Invalid station Id!!!"));
		Station destinationStation =stationDao.findById(train.getDestinationStationId()).orElseThrow(() -> new ResourceNotFoundException("Invalid station Id!!!"));
		Train trainTOAdd = mapper.map(train, Train.class);
		
		
		return null;
	}

}
