package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.User;

public interface UserDao extends JpaRepository<User, Long>  {

}
