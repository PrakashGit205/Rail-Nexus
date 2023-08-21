package com.railnexus.controller;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dao.UserDao;
import com.railnexus.dto.AddUserDTO;
import com.railnexus.dto.LoginRequestDTO;
import com.railnexus.dto.response.LoginResponse;
import com.railnexus.dto.response.UserResponseDTO;
import com.railnexus.exception.ResourceNotFoundException;
import com.railnexus.pojos.User;
import com.railnexus.services.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired
	private ModelMapper model;
	
	@Autowired
	private UserService service;
	
	@Autowired
	private UserDao dao;
	
	@PostMapping
	public ResponseEntity<?> addUser(@RequestBody AddUserDTO dto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(model.map(service.addUser(dto), UserResponseDTO.class));
	}
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(Long id) {
		return ResponseEntity.status(HttpStatus.OK).body(model.map(service.getUserById(id), UserResponseDTO.class));
	}
	@GetMapping
	public ResponseEntity<?> getAllUsers(){
		return ResponseEntity.status(HttpStatus.OK).body(service.allUsers().stream().map(user->model.map(user, UserResponseDTO.class)).toList());
	}
	@PutMapping
	public ResponseEntity<?> updateUser(@RequestBody AddUserDTO dto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(model.map(service.addUser(dto), UserResponseDTO.class));
	}
	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable Long id){
		
service.deleteUser(id);
	}
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequestDTO dto){
		return ResponseEntity.status(HttpStatus.OK).body(model.map(service.login(dto.getEmail(), dto.getPassword()),LoginResponse.class));
	}
	
}
