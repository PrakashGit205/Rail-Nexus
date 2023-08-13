package com.railnexus.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railnexus.dao.StationDao;
import com.railnexus.pojos.Station;
import com.railnexus.services.interfaces.IStationService;

@Service
@Transactional
public class StationService implements IStationService{
	
	@Autowired
	private StationDao dao;
	
	@Override
	public Station addStation(Station station) {
		// TODO Auto-generated method stub
		return dao.save(station);
	}

}
