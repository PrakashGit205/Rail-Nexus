package com.railnexus.controller;

import java.util.List;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
@RequestMapping("/trains")
@CrossOrigin(origins = "*")
public class TrainController {
	@Autowired
	private TrainDao dao;

	@Autowired
	private TrainService service;
	@Autowired
	private ModelMapper model;

	@GetMapping
	public List<TrainResponseDTO> allTrains() {
		return dao.findAll().stream().map(train->model.map(train, TrainResponseDTO.class)).toList();
	}

	@PostMapping
	public TrainResponseDTO addTrain(@RequestBody AddTrainDTO train) {

		return service.addTrain(train);
	}

}
