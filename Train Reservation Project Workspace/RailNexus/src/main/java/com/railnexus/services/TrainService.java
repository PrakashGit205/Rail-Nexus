package com.railnexus.services;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Duration;
import java.time.LocalTime;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.FairDao;
import com.railnexus.dao.StationDao;
import com.railnexus.dao.TrainDao;
import com.railnexus.dao.TrainStationDao;
import com.railnexus.dto.AddTrainDTO;
import com.railnexus.dto.response.StationResponseDTO;
import com.railnexus.dto.response.TrainResponseDTO;
import com.railnexus.exception.ResourceNotFoundException;
import com.railnexus.pojos.Station;
import com.railnexus.pojos.Train;
import com.railnexus.pojos.TrainStation;
import com.railnexus.services.interfaces.ITrainService;

//import ch.qos.logback.core.util.Duration;

@Service
@Transactional
public class TrainService implements ITrainService {

	@Autowired
	private TrainDao dao;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private StationDao stationDao;
	@Autowired
	private FairDao fairDao;
	@Autowired
	private TrainStationDao trainStationDao;
	@Autowired
	private DistanceService distanceService;

	public TrainResponseDTO addTrain(AddTrainDTO train) {

		Station originStation = stationDao.findById(train.getOriginStationId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid station Id!!!"));
		Station destinationStation = stationDao.findById(train.getDestinationStationId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid station Id!!!"));
		Train trainTOAdd = mapper.map(train, Train.class);
		System.out.println(trainTOAdd);
		trainTOAdd.addDestinationStation(destinationStation);
		trainTOAdd.addOriginStation(originStation);
//		System.out.println(trainTOAdd);
		Train train2 = dao.save(trainTOAdd);
		return mapper.map(train2, TrainResponseDTO.class);
	}

	public List<TrainResponseDTO> alltrains() {
		List<Train> trains = dao.findAll();
		return trains.stream().map(train -> mapper.map(train, TrainResponseDTO.class)).toList();
	}

	public List<TrainStation> trainRoute(Long trainId) {
		return trainStationDao.findByTrainId(trainId);

	}

	public Duration traiDestinationTime(Long sourceId, Long destinationId, Long trainSpeed) {
		float distance = distanceService.findybyOriginAndDestination(sourceId, destinationId).getDistance();
		System.out.println("distance = " + distance + "train speed" + trainSpeed);
		BigDecimal distanceInKm = BigDecimal.valueOf(distance);
		BigDecimal speedInKmh = BigDecimal.valueOf(trainSpeed);

		// Calculate time in hours with high precision
		BigDecimal timeInHours = distanceInKm.divide(speedInKmh, RoundingMode.HALF_UP);

		// Convert time to seconds
		long timeInSeconds = timeInHours.multiply(BigDecimal.valueOf(3600)).longValue();

		return Duration.ofSeconds(timeInSeconds);
	}

	private LocalTime converter() {
		long durationInSeconds = (240 / 120) * 60 * 60; // 1 hour in seconds
		LocalTime time = LocalTime.of(10, 30);
		// Convert the long duration to a Duration object
		Duration duration = Duration.ofHours(durationInSeconds);

		// Add the duration to the LocalTime
		LocalTime result = time.plus(duration);
		return result;
	}

}
