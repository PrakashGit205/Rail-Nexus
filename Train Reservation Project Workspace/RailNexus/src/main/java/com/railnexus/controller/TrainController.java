package com.railnexus.controller;

import java.time.LocalDate;
import java.util.List;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dao.TrainDao;
import com.railnexus.dto.AddTrainDTO;
import com.railnexus.dto.response.TrainResponseDTO;
import com.railnexus.pojos.Distance;
import com.railnexus.pojos.Train;
import com.railnexus.services.TrainService;

@RestController
@RequestMapping("/api/trains")

@CrossOrigin(origins = "*")
public class TrainController {
	@Autowired
	private TrainDao dao;

	@Autowired
	private TrainService service;
	@Autowired
	private ModelMapper model;

	@GetMapping
	public ResponseEntity<?> allTrains() {
		return ResponseEntity.status(HttpStatus.OK).body(dao.findAll().stream().map(train->model.map(train, TrainResponseDTO.class)).toList()
	);}
	@GetMapping("/{sourceId}/{destinationId}")
	public ResponseEntity<?> trainBySourceAndDestinationId(@PathVariable Long sourceId,@PathVariable Long destinationId ) {
		return ResponseEntity.status(HttpStatus.OK).body(dao.findByOriginStationIdAndDestinationStationId(sourceId,destinationId).stream().map(train->model.map(train, TrainResponseDTO.class)).toList());
	}
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping
	public ResponseEntity<?> addTrain(@RequestBody AddTrainDTO train) {

		return ResponseEntity.status(HttpStatus.CREATED).body(service.addTrain(train));
	}
	@PutMapping()
	public ResponseEntity<?> editTrain(@RequestBody AddTrainDTO dto ) {
		return ResponseEntity.status(HttpStatus.OK).body(dao.findAll());}
}
