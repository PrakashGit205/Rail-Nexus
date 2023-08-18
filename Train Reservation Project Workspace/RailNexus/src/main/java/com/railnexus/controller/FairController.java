package com.railnexus.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dao.FairDao;
import com.railnexus.pojos.Fair;
import com.railnexus.pojos.Seat;
import com.railnexus.services.interfaces.IFairService;

@RestController
@RequestMapping("/fair")
@CrossOrigin(origins = "*")
public class FairController {
	@Autowired
	private FairDao dao;

	@Autowired
	private IFairService service;
	@Autowired
	private ModelMapper model;

	@GetMapping("/{trainNo}")
	public List<Fair> showAvailaSeatsByTrain(@PathVariable Long trainNo) {
		return service.showFairByTrainId(trainNo);
	}

	@GetMapping("/{trainNo}/{classType}")
	public List<Fair> showAvailaSeatsByClass(@PathVariable Long trainNo, @PathVariable String classType) {
		return service.showBoogieFair(trainNo, classType);
	}

}
