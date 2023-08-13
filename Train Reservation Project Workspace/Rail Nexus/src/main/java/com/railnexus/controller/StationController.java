package com.railnexus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dao.StationDao;
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

	@GetMapping
	public List<Station> allStations() {
		return dao.findAll();
	}

	@PostMapping
	public Station addStation(@RequestBody Station station) {
		return service.addStation(station);
	}
}
