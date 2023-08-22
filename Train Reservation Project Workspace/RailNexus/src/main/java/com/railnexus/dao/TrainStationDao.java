package com.railnexus.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.railnexus.pojos.TrainStation;

public interface TrainStationDao extends JpaRepository<TrainStation, Long> {
 List<TrainStation>	findByStationIdOrStationId(Long sourceId,Long destinationId);
// List<TrainStation>	findByStationIdOrStationId(Long sourceId,Long destinationId);
 List<TrainStation> findByTrainId(Long trainId);
 @Query(value = 
		    "SELECT train_id " +
		    "FROM trains_stations ts " +
		    "WHERE ts.station_id IN (:startId, :endId) " +
		    "GROUP BY ts.train_id " +
		    "HAVING GROUP_CONCAT(ts.station_id ORDER BY ts.sequence) = ':startId, :endId'",
		    nativeQuery = true)
		List<Long> findTrainIdsWithStartAndEndStations(@Param("startId") Long startId, @Param("endId") Long endId);

}
