package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.railnexus.pojos.Distance;
import java.util.List;


public interface DistanceDao extends JpaRepository<Distance, Long> {
	@Query("SELECT d FROM Distance d " +
	           "WHERE (d.originStation.id = :originStationId1 AND d.destinationStation.id = :destinationStationId1) " +
	           "OR (d.destinationStation.id = :originStationId2 AND d.originStation.id = :destinationStationId2 )")
	    List<Distance> findByOriginStationIdAndDestinationStationIdOrDestinationStationIdAndOriginStationId(
	        Long originStationId1, Long destinationStationId1,
	        Long destinationStationId2, Long originStationId2
	    );
}
