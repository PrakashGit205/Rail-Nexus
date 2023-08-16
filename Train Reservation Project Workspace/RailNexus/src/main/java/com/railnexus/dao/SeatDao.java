package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.Seat;
import com.railnexus.pojos.Train;

import java.util.List;


public interface SeatDao extends JpaRepository<Seat, Long> {
	List<Seat> findByTrainId(Long trainNo);
}
