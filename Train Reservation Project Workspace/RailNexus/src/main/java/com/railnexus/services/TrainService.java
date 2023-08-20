package com.railnexus.services;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.FairDao;
import com.railnexus.dao.StationDao;
import com.railnexus.dao.TrainDao;
import com.railnexus.dto.AddTrainDTO;
import com.railnexus.dto.response.StationResponseDTO;
import com.railnexus.dto.response.TrainResponseDTO;
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
	
	public TrainResponseDTO addTrain(AddTrainDTO train) {
		
		Station originStation = stationDao.findById(train.getOriginStationId()).orElseThrow(() -> new ResourceNotFoundException("Invalid station Id!!!"));
		Station destinationStation =stationDao.findById(train.getDestinationStationId()).orElseThrow(() -> new ResourceNotFoundException("Invalid station Id!!!"));
		Train trainTOAdd = mapper.map(train, Train.class);
		System.out.println(trainTOAdd);
		trainTOAdd.addDestinationStation(destinationStation);
		trainTOAdd.addOriginStation(originStation);
//		System.out.println(trainTOAdd);
		Train train2 =  dao.save(trainTOAdd);
		return mapper.map(train2, TrainResponseDTO.class);
	}
	public List<TrainResponseDTO> alltrains() {
		List<Train> trains=	dao.findAll();
		return trains.stream().map(train->mapper.map(train, TrainResponseDTO.class)).toList();
	}
	

}
