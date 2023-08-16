package com.railnexus.services.interfaces;

import java.util.List;

import com.railnexus.pojos.User;

public interface IUserService {
	List<User> allUsers();
	User getUserById(Long id);
	User login(String email, String password);
}
