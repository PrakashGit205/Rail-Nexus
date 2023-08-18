package com.railnexus.controller;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dao.RunningTrainDao;
import com.railnexus.dto.FirstDataDTO;
import com.railnexus.dto.response.RunningTrainResponseDTO;
import com.railnexus.dto.response.TrainResponseDTO;
import com.railnexus.pojos.RunningTrain;
import com.railnexus.services.RunningTrainService;

@RestController
@RequestMapping("/running")
@CrossOrigin(origins = "*")
public class RunningTrainController {

	@Autowired
	private RunningTrainDao dao;
	
	@Autowired
	private RunningTrainService service;
	
	@Autowired
	private ModelMapper model;
	
	@GetMapping
	public List<RunningTrainResponseDTO> trainSchedule(){
		return service.trainSchedules();
	}
	@GetMapping("/{date}")
	public List<RunningTrainResponseDTO> trainByDate(@PathVariable LocalDate date){
		return dao.findByOriginDate(date).stream().map(train->model.map(train, RunningTrainResponseDTO.class)).toList();
			
	}
//	@GetMapping("/{originId}/{sourceId}")
	@PostMapping
	public List<RunningTrainResponseDTO> getTrain(@RequestBody FirstDataDTO dto){
		return service.trainStationAndDate(dto.getOriginId(), dto.getSourceId(), dto.getOriginDate());
	}
}