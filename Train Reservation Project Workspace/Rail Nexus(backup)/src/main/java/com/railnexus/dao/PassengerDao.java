package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.Passenger;

public interface PassengerDao extends JpaRepository<Passenger, Long>{

}
