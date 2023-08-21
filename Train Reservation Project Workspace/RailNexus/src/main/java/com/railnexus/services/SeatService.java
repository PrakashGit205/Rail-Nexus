package com.railnexus.services;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.LiveSeatDao;
import com.railnexus.dao.SeatDao;
import com.railnexus.dao.TrainDao;
import com.railnexus.dto.response.LiveSeatResponse;
import com.railnexus.dto.response.RunningTrainResponseDTO;
import com.railnexus.dto.response.SeatResponseDTO;
import com.railnexus.exception.ResourceNotFoundException;
import com.railnexus.pojos.Seat;
import com.railnexus.services.interfaces.ISeatService;
@Service
@Transactional
public class SeatService implements ISeatService {

	@Autowired
	private SeatDao dao;
	
	@Autowired
	private LiveSeatDao liveDao;
	
	@Autowired
	private TrainDao trainDao;
	
	@Autowired
	private  ModelMapper
	 mapper;
	
	@Override
	public List<SeatResponseDTO> showAvailableSeats(Long trainNo) {
		
		return dao.findByTrainId(trainNo).stream().map(train -> mapper.map(train, SeatResponseDTO.class)).toList();
	}

	public List<LiveSeatResponse> showAvailableSeats(Long trainNo,LocalDate originDate){
		System.out.println(liveDao.getTotalSeatsByClassAndDate(originDate, trainNo));
		

		    List<Object[]> queryResult = liveDao.getTotalSeatsByClassAndDate(originDate, trainNo);

		    List<LiveSeatResponse> responseList = queryResult.stream()
		            .map(row -> new LiveSeatResponse((String) row[0], (LocalDate) row[1], (Long) row[2]))
		            .collect(Collectors.toList());
		System.out.println(responseList);
		
//		List<LiveSeatResponse> list=	liveDao.getTotalSeatsByClassAndDate(originDate, trainNo).stream().map(train -> mapper.map(train, LiveSeatResponse.class)).toList();
		System.out.println(responseList);
		return responseList;
	}
	
	
}
