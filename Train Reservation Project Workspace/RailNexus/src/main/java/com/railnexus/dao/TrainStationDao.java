package com.railnexus.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.TrainStation;

public interface TrainStationDao extends JpaRepository<TrainStation, Long> {
 List<TrainStation>	findByStationIdOrStationId(Long sourceId,Long destinationId);
	
}
