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

	public List<RunningTrainResponseDTO> trainStationAndDateAndClass(FirstDataDTO requestDto) {
		List<RunningTrain> dto = null;
		List<RunningTrain> newDto = null;
		System.out.println(requestDto);
		List<TrainStation> trainsAndStations = trainStationDao.findByStationIdOrStationId(requestDto.getSourceId(),
				requestDto.getOriginId());
//		System.out.println(trainsAndStations);
		trainsAndStations.sort((a, b) -> a.getSequence() - b.getSequence());

//		boolean flag = false;
		int j = 0;
		for (int i = 0; i < trainsAndStations.size(); i++) {

			if (requestDto.getSourceId().equals(trainsAndStations.get(i).getStation().getId())) {
				j = trainsAndStations.get(i).getSequence();
				dto = (trainsAndStations.get(i).getTrain().getRunningTrain());
//				flag = true;
			} else if (requestDto.getOriginId().equals(trainsAndStations.get(i).getStation().getId())
					&& j > trainsAndStations.get(i).getSequence()) {
				dto.addAll(trainsAndStations.get(i).getTrain().getRunningTrain());

			}
			System.out.println("inside trains and stations ");
		}
		newDto = dto;
		
		if (requestDto.getOriginId() != null && requestDto.getSourceId() != null
				&& requestDto.getOriginDate() != null) {
			newDto = dto.stream().filter(train -> train.getOriginDate().equals(requestDto.getOriginDate())).toList();
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
				toSendDto.get(i).setDepartStation(newDto.get(i).getTrain().getDestinationStation().getName());
				toSendDto.get(i).setOriginStatioin(newDto.get(i).getTrain().getOriginStation().getName());
				toSendDto.get(i).setOriginTime(newDto.get(i).getTrain().getOriginTime());

			}
		}
		

		System.out.println("data of request" + toSendDto);
		return toSendDto;
	}

	public List<RunningTrainResponseDTO> trainSchedules() {
		List<RunningTrain> dto = dao.findAll();
		List<RunningTrainResponseDTO> toSendDto = dto.stream()
				.map(train -> mapper.map(train, RunningTrainResponseDTO.class)).toList();

		for (int i = 0; i < dto.size(); i++) {
			toSendDto.get(i).setTrainNo(dto.get(i).getTrain().getTrainNo());
			toSendDto.get(i).setTrainName(dto.get(i).getTrain().getTrainName().toUpperCase());
			toSendDto.get(i).setDepartStation(dto.get(i).getTrain().getDestinationStation().getName());
			toSendDto.get(i).setOriginStatioin(dto.get(i).getTrain().getOriginStation().getName());
			toSendDto.get(i).setOriginTime(dto.get(i).getTrain().getOriginTime());
		}
		
		return toSendDto;
	}

}
