package com.railnexus.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.Train;

public interface TrainDao extends JpaRepository<Train, Long> {
 List<Train> findByOriginStationIdAndDestinationStationId(Long originId,Long destinationId);

}
