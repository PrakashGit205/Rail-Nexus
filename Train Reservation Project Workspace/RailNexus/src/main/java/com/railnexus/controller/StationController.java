package com.railnexus.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dao.StationDao;
import com.railnexus.dto.AddStationDTO;
import com.railnexus.dto.response.StationResponseDTO;
import com.railnexus.exception.ResourceNotFoundException;
import com.railnexus.pojos.Station;
import com.railnexus.services.StationService;

//import io.swagger.v3.oas.annotations.parameters.RequestBody;
//org.springframework.web.bind.annotation.
@RestController
@RequestMapping("/station")
public class StationController {
	@Autowired
	private StationDao dao;

	@Autowired
	private StationService service;

	@Autowired
	private ModelMapper model;
	
	@GetMapping
	public List<StationResponseDTO> allStations() {
		
		return service.allStations();
	}

	@PostMapping
	public StationResponseDTO addStation(@RequestBody AddStationDTO station) {
		System.out.println(station);
		return model.map(service.addStation(station), StationResponseDTO.class) ;
	}
	@GetMapping("/{id}")
	public StationResponseDTO getStation(@PathVariable Long id) {
		return model.map(dao.findById(id).orElseThrow(()->new ResourceNotFoundException("invalid Station id")), StationResponseDTO.class);
	}
}
