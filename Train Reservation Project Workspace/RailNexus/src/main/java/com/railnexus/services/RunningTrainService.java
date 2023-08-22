package com.railnexus.services;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.Stack;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import com.railnexus.dao.DistanceDao;
import com.railnexus.dao.RunningTrainDao;
import com.railnexus.dao.TrainStationDao;
import com.railnexus.dto.FirstDataDTO;
import com.railnexus.dto.response.RunningTrainResponseDTO;
import com.railnexus.pojos.RunningTrain;
import com.railnexus.pojos.Train;
import com.railnexus.pojos.TrainStation;
import com.railnexus.services.interfaces.IRunningTrainService;

@Service
@Transactional
public class RunningTrainService implements IRunningTrainService {
	@Autowired
	private RunningTrainDao dao;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private TrainStationDao trainStationDao;
	@Autowired
	private TrainService trainService;
	@Autowired
	private  StationService stationService;
	
	@Autowired
	private DistanceService distanceService;
	

	public List<RunningTrainResponseDTO> trainStationAndDateAndClass(FirstDataDTO requestDto) {
		List<RunningTrain> dto = null;
		List<RunningTrain> newDto = null;
		System.out.println(requestDto);
		List<Long> list  = trainStationDao.findTrainIdsWithStartAndEndStations(requestDto.getSourceId(), requestDto.getOriginId());
		System.out.println(" this is list of trains : - "+list);	
		List<TrainStation> trainsAndStations = trainStationDao.findByStationIdOrStationId(requestDto.getSourceId(),
				requestDto.getOriginId());
		trainsAndStations.sort((a, b) -> a.getSequence() - b.getSequence());
		System.out.println(trainsAndStations);

//		boolean flag = false;
		int j = Integer.MAX_VALUE;
		for (int i = 0; i < trainsAndStations.size(); i++) {
			
			if (requestDto.getSourceId().equals(trainsAndStations.get(i).getStation().getId())) {
				j = trainsAndStations.get(i).getSequence();
				dto = trainsAndStations.get(i).getTrain().getRunningTrain();
//				flag = true;
				
			} else if (requestDto.getOriginId().equals(trainsAndStations.get(i).getStation().getId())
					&& j < trainsAndStations.get(i).getSequence()) {
				dto.addAll(trainsAndStations.get(i).getTrain().getRunningTrain());

			}
			System.out.println("inside trains and stations ");
		}
		System.out.println("data of request dto " + dto);
		
		newDto = dto;
		
		if (requestDto.getOriginId() != null && requestDto.getSourceId() != null
				&& requestDto.getOriginDate() != null) {
			newDto = dto.stream().filter(train -> train.getOriginDate().equals(requestDto.getOriginDate())).toList();
		}
		else {
			
		}
		
//			dto = dao.findByTrainOriginStationCodeAndTrainDestinationStationCodeAndOriginDate(requestDto.getOriginId(),
//					requestDto.getSourceId(), requestDto.getOriginDate());

//		 if (requestDto.getOriginId() != null && requestDto.getSourceId() != null)
//			newDto = dao.findByTrainOriginStationCodeAndTrainDestinationStationCode(requestDto.getOriginId(),
//					requestDto.getSourceId());
		List<RunningTrainResponseDTO> toSendDto = null;
		if (newDto != null) {
			toSendDto = newDto.stream().map(train -> mapper.map(train, RunningTrainResponseDTO.class)).toList();

			for (int i = 0; i < newDto.size(); i++) {
				toSendDto.get(i).setTrainNo(newDto.get(i).getTrain().getTrainNo());
				toSendDto.get(i).setTrainName(newDto.get(i).getTrain().getTrainName());
				toSendDto.get(i).setDepartStation(stationService.getStation(requestDto.getOriginId()).getName());
				toSendDto.get(i).setOriginStatioin(stationService.getStation(requestDto.getSourceId()).getName());
				// to do
				toSendDto.get(i).setOriginTime(newDto.get(i).getTrain().getOriginTime());
				toSendDto.get(i).setDepartTime(newDto.get(i).getTrain().getOriginTime().plus(trainService.traiDestinationTime(requestDto.getSourceId(),requestDto.getOriginId(),newDto.get(i).getTrain().getTrainSpeed())));
			toSendDto.get(i).setDistance(distanceService.findybyOriginAndDestination(requestDto.getSourceId(),requestDto.getOriginId()).getDistance());
			}
			// first get the train route 
			// then check where our source station is 
			// if source station is at the sequence 1 then origin time will be origin time ...
			
			// if it is not then find it through searching and when source station will be found
			// then take its sequence and find from starting origin destination distance
			// one by one take th distance till source station
			// after finding the total distance take train speed 
			// and calculate arrival time of train ;
			
		}
		
		

		System.out.println("data of request" + toSendDto);
//		toSendDto.sort((a,b)->a.getOriginDate().compareTo(b.getOriginDate()));;
		return toSendDto;
	}
	public void trainTIming(Long originId, Long destinationId,RunningTrainResponseDTO dto) {
		List<TrainStation> trainStation = trainStationDao.findByTrainId(dto.getTrainNo());
		
		trainStation.sort((a,b)->a.getSequence()-b.getSequence());
		if(trainStation.get(0).getStation().getId().equals(originId)) {
			// will write later
		}
	}

	public List<RunningTrainResponseDTO> trainSchedules() {
		List<RunningTrain> dto = dao.findAll();
		List<RunningTrainResponseDTO> toSendDto = dto.stream()
				.map(train -> mapper.map(train, RunningTrainResponseDTO.class)).toList();

		for (int i = 0; i < dto.size(); i++) {
			toSendDto.get(i).setTrainNo(dto.get(i).getTrain().getId());
			toSendDto.get(i).setTrainName(dto.get(i).getTrain().getTrainName().toUpperCase());
			toSendDto.get(i).setDepartStation(dto.get(i).getTrain().getDestinationStation().getName());
			toSendDto.get(i).setOriginStatioin(dto.get(i).getTrain().getOriginStation().getName());
			toSendDto.get(i).setOriginTime(dto.get(i).getTrain().getOriginTime());
//			toSendDto.get(i).setDistance();
			
		}
		
		return toSendDto;
	}
	
	 

}
