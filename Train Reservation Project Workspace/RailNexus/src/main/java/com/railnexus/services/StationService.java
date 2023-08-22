package com.railnexus.services;

import java.util.List;
import java.util.stream.Collector;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.StationDao;
import com.railnexus.dao.TrainDao;
import com.railnexus.dto.AddStationDTO;
import com.railnexus.dto.response.StationResponseDTO;
import com.railnexus.pojos.Station;
import com.railnexus.services.interfaces.IStationService;

@Service
@Transactional
public class StationService implements IStationService {

	@Autowired
	private StationDao dao;
	@Autowired
	private TrainDao trainDao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public Station addStation(AddStationDTO station) {
		
		System.out.println(station);
		return dao.save(mapper.map(station, Station.class));
	}

	@Override
	public List<StationResponseDTO> allStations() {
		List<Station> stations=	dao.findAll();
		
		return stations.stream().map(station->mapper.map(station, StationResponseDTO.class)).toList();
	}
	public Station getStation(Long id) {
		return dao.findById(id).orElseThrow();
		
	}

}
