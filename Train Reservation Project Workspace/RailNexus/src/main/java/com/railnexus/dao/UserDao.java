package com.railnexus.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.User;

public interface UserDao extends JpaRepository<User, Long>  {

	Optional<User> findByEmail(String email);
	Optional<User> findByEmailAndPassword(String email,String password);
}
