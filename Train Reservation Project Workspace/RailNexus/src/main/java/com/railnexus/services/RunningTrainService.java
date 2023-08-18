package com.railnexus.services;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import com.railnexus.dao.RunningTrainDao;
import com.railnexus.dto.response.RunningTrainResponseDTO;
import com.railnexus.pojos.RunningTrain;
import com.railnexus.pojos.Train;
import com.railnexus.services.interfaces.IRunningTrainService;

@Service
@Transactional
public class RunningTrainService implements IRunningTrainService {
	@Autowired
	private RunningTrainDao dao;
	@Autowired
	private ModelMapper mapper;

	public List<RunningTrainResponseDTO> trainStationAndDate(Long originId, Long sourceId, LocalDate originDate) {
		List<RunningTrain> dto = dao.findByTrainOriginStationIdAndTrainDestinationStationIdAndOriginDate(originId,
				sourceId, originDate);
		List<RunningTrainResponseDTO> toSendDto = dto.stream()
				.map(train -> mapper.map(train, RunningTrainResponseDTO.class)).toList();

		for (int i = 0; i < dto.size(); i++) {
			toSendDto.get(i).setTrainNo(dto.get(i).getTrain().getTrainNo());
			toSendDto.get(i).setTrainName(dto.get(i).getTrain().getTrainName());
			toSendDto.get(i).setDepartStation(dto.get(i).getTrain().getDestinationStation().getName());
			toSendDto.get(i).setOriginStatioin(dto.get(i).getTrain().getOriginStation().getName());
			toSendDto.get(i).setOriginTime(dto.get(i).getTrain().getOriginTime());

		}

		return toSendDto;
	}
	public List<RunningTrainResponseDTO> trainSchedules(){
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
