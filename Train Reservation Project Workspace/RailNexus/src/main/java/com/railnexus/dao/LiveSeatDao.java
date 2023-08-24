package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.railnexus.dto.response.LiveSeatResponse;
import com.railnexus.pojos.LiveSeat;

import java.time.LocalDate;
import java.util.List;


public interface LiveSeatDao extends JpaRepository<LiveSeat, Long> {
	@Query("SELECT l.classType, l.destinationTime, SUM(l.availableSeats) AS availableSeats "
		       + "FROM LiveSeat l "
		       + "WHERE l.destinationTime = :destinationTime AND l.train.id = :trainId "
		       + "GROUP BY l.classType, l.destinationTime")
	 List<Object[]> getTotalSeatsByClassAndDate(
		    @Param("destinationTime") LocalDate destinationTime,
		    @Param("trainId") Long trainId);
	List<LiveSeat> findByTrainIdAndDestinationTime(Long trainId,LocalDate destinationTime);
	
	List<LiveSeat> findByClassTypeAndDestinationTimeAndTrainId(String classType,Long trainId,LocalDate destinationTime);
	List<LiveSeat> findByClassTypeAndDestinationTimeAndTrainIdAndSeatType(String classType,Long trainId,LocalDate destinationTime,String seatType);
	
}
