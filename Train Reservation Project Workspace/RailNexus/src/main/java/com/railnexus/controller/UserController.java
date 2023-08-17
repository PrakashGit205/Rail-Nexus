package com.railnexus.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dto.AddUserDTO;
import com.railnexus.dto.response.UserResponseDTO;
import com.railnexus.pojos.User;
import com.railnexus.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private ModelMapper model;
	
	@Autowired
	private UserService service;
	
	@PostMapping
	public UserResponseDTO addUser(@RequestBody AddUserDTO dto) {
		return model.map(service.addUser(dto), UserResponseDTO.class);
	}
	@GetMapping("/{id}")
	public UserResponseDTO getUserById(Long id) {
		return model.map(service.getUserById(id), UserResponseDTO.class);
	}
	@GetMapping
	public List<UserResponseDTO> getAllUsers(){
		return service.allUsers().stream().map(user->model.map(user, UserResponseDTO.class)).toList();
	}
	
}
