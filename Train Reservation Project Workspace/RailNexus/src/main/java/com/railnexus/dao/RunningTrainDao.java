package com.railnexus.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.railnexus.pojos.RunningTrain;
import com.railnexus.pojos.Station;

import java.time.LocalDate;

public interface RunningTrainDao extends JpaRepository<RunningTrain, Long> {
//	@Query("SELECT distinct t.train_no, delay,t.train_name,t.origin_time,origin_date FROM running_trains rt,trains t WHERE t.id=rt.train_id and t.origin_station = :originId AND t.destination_station = :sourceId AND rt.origin_date = :originDate;"
//			+ "")
//	List<RunningTrain> trainStationAndDate(Long originId, Long sourceId, LocalDate originDate);

	List<RunningTrain> findByOriginDate(LocalDate originDate);

	List<RunningTrain> findByCurrentStationId(Long currentStation);

	List<RunningTrain> findByTrainTrainNo(Long train);

	List<RunningTrain> findByTrainOriginStationIdAndTrainDestinationStationIdAndOriginDate(Long originId, Long sourceId,
			LocalDate originDate);

}
