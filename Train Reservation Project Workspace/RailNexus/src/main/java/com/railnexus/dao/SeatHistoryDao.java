package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.SeatHistory;

public interface SeatHistoryDao extends JpaRepository<SeatHistory, Long>{

}
