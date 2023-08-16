package com.railnexus.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.UserDao;
import com.railnexus.pojos.User;
import com.railnexus.services.interfaces.IUserService;

@Service
@Transactional
public class UserService implements IUserService{
	
	@Autowired
	private UserDao userDao;
	
	
	@Override
	public List<User> allUsers() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	@Override
	public User getUserById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User login(String email, String password) {
		// TODO Auto-generated method stub
		return null;
	}

}
