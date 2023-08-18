package com.railnexus.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dao.SeatDao;
import com.railnexus.pojos.Seat;
import com.railnexus.services.SeatService;

@RestController
@RequestMapping("/seat")
@CrossOrigin(origins = "*")
public class SeatController {
	@Autowired
	private SeatService service;

	@Autowired
	private SeatDao dao;

	@Autowired
	private ModelMapper model;

	@GetMapping("/{trainNo}")
	public List<Seat> showAvailaSeats(@PathVariable Long trainNo) {
		return service.showAvailableSeats(trainNo);
	}
}
