package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.Passenger;
import java.util.List;


public interface PassengerDao extends JpaRepository<Passenger, Long>{
List<Passenger> findByPnr(String pnr);
List<Passenger> findByUserId(Long userId);
}
