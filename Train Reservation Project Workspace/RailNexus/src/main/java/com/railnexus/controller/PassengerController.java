package com.railnexus.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dao.PassengerDao;
import com.railnexus.dao.SeatDao;
import com.railnexus.dto.AddPassengerDTO;
import com.railnexus.dto.response.PassengerResponseDTO;
import com.railnexus.pojos.Passenger;
import com.railnexus.services.PassengerService;
import com.railnexus.services.SeatService;

@RestController
@RequestMapping("/api/passengers")
@CrossOrigin(origins = "*")
public class PassengerController {
	@Autowired
	private PassengerService service;

	@Autowired
	private PassengerDao dao;

	@Autowired
	private ModelMapper model;

	@GetMapping
	public List<PassengerResponseDTO> allPassengers() {
		return dao.findAll().stream().map(passenger -> model.map(passenger, PassengerResponseDTO.class))
				.collect(Collectors.toList());
	}
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	@PostMapping
	public PassengerResponseDTO addPassenger(@RequestBody AddPassengerDTO dto) {

		PassengerResponseDTO rDto =  service.addPassenger(dto);
		return rDto;
	}

	@GetMapping("/{pnrNo}")
	public List<PassengerResponseDTO> passangerByPnrNo(@PathVariable String pnrNo) {
		return dao.findByPnr(pnrNo).stream().map(passenger -> model.map(passenger, PassengerResponseDTO.class))
				.collect(Collectors.toList());

	}

	@GetMapping("/user/{userId}")
	public List<PassengerResponseDTO> passangerByUserId(@PathVariable Long userId) {
		return dao.findByUserId(userId).stream().map(passenger -> model.map(passenger, PassengerResponseDTO.class))
				.collect(Collectors.toList());

	}

}
