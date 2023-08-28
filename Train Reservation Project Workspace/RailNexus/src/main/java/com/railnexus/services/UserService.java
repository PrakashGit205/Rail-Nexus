package com.railnexus.services;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.railnexus.dao.UserDao;
import com.railnexus.dto.AddUserDTO;
import com.railnexus.exception.ResourceNotFoundException;
import com.railnexus.pojos.User;
import com.railnexus.services.interfaces.IUserService;

@Service
@Transactional
public class UserService implements IUserService{
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public List<User> allUsers() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	@Override
	public User getUserById(Long id) {
		
		return userDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid User Id!!!"));
	}

	@Override
	public User login(String email, String password) {
		// TODO Auto-generated method stub
		return userDao.findByEmailAndPassword(email, password).orElseThrow(() -> new ResourceNotFoundException("Invalid User Id!!!"));
		
	}

	@Override
	public User addUser(AddUserDTO dto) {
		User user = mapper.map(dto, User.class);
		user.setRegDate(LocalDate.now());
		user.setRole("ROLE_USER");
		user.setPassword(encoder.encode(user.getPassword()));
		return userDao.save(user);
	}

	public User updateUser(AddUserDTO dto) {
		User user = mapper.map(dto, User.class);
		user.setRegDate(LocalDate.now());
		return userDao.save(user);
	}
	public void deleteUser(Long id) {
//		User user = 		userDao.findById(id).orElseThrow(()->new ResourceNotFoundException("user id not found") );
		 userDao.deleteById(id) ;
	}
}
