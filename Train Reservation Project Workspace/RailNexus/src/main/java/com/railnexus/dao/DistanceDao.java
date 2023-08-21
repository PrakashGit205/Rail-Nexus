package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.Distance;
import java.util.List;


public interface DistanceDao extends JpaRepository<Distance, Long> {
	List<Distance> findByOriginStationIdAndDestinationStationIdOrDestinationStationIdAndOriginStationId(Long originStation,Long destinationStation,Long destinationStationId,Long originStationId);
}
