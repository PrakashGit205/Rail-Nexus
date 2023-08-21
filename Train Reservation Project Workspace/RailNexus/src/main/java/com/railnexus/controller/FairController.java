package com.railnexus.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dao.FairDao;
import com.railnexus.dto.response.FairResponseDTO;
import com.railnexus.dto.response.TrainResponseDTO;
import com.railnexus.pojos.Fair;
import com.railnexus.pojos.Seat;
import com.railnexus.services.interfaces.IFairService;

@RestController
@RequestMapping("/api/fair")
@CrossOrigin(origins = "*")
public class FairController {
	@Autowired
	private FairDao dao;

	@Autowired
	private IFairService service;
	@Autowired
	private ModelMapper model;

	@GetMapping("/{trainNo}")
	public ResponseEntity<?> showAvailaSeatsByTrain(@PathVariable Long trainNo) {
		return ResponseEntity.status(HttpStatus.OK).body(service.showFairByTrainId(trainNo).stream()
				.map(fair -> model.map(fair, FairResponseDTO.class)).toList())

		;
	}

	@GetMapping("/{trainNo}/{classType}")
	public ResponseEntity<?> showAvailaSeatsByClass(@PathVariable Long trainNo, @PathVariable String classType) {

		return ResponseEntity.status(HttpStatus.OK).body(service.showBoogieFair(trainNo, classType).stream()
				.map(fair -> model.map(fair, FairResponseDTO.class)).toList());
	}

	@GetMapping("/station/{sourceId}/{destinationId}")
	public ResponseEntity<?> showBySourceAndDestination(@PathVariable Long sourceId, @PathVariable Long destinationId) {

		return ResponseEntity.status(HttpStatus.OK).body(service.showBySourceAndDestination(sourceId, destinationId)
				.stream().map(fair -> model.map(fair, FairResponseDTO.class)).toList());
	}

}
