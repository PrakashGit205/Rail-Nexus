package com.irctc.tester;

import java.util.List;

import com.irctc.station.StationDao;
import com.irctc.station.Stations;

public class Main {
	
	public static void main(String[] args) {
		try {
		StationDao sd = new StationDao();
		List<Stations> list = sd.showAllStations();
		for (Stations stations : list) {
			System.out.println(stations);
		}
		}catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}
	}

}
