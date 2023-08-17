package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.LiveSeat;

public interface LiveSeatDao extends JpaRepository<LiveSeat, Long> {

}
