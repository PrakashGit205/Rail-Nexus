package com.railnexus.controller;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@RequestMapping("/api/running")
@CrossOrigin(origins = "*")
public class RunningTrainController {

	@Autowired
	private RunningTrainDao dao;
	
	@Autowired
	private RunningTrainService service;
	
	@Autowired
	private ModelMapper model;
	
	@GetMapping
	public ResponseEntity<?> trainSchedule(){
		return ResponseEntity.status(HttpStatus.OK).body(service.trainSchedules());
	}
	@GetMapping("/{date}")
	public ResponseEntity<?> trainByDate(@PathVariable LocalDate date){
		return ResponseEntity.status(HttpStatus.OK).body(dao.findByOriginDate(date).stream().map(train->model.map(train, RunningTrainResponseDTO.class)).toList());
			
	}
//	@GetMapping("/{originId}/{sourceId}")
	@PostMapping	
	public ResponseEntity<?> getTrainByOriginAndSource(@RequestBody FirstDataDTO dto){
		
		return ResponseEntity.status(HttpStatus.OK).body(service.trainStationAndDateAndClass(dto));
	}
}
