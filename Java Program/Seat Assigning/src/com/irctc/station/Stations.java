package com.irctc.station;

public class Stations {
	String stationName;
	int stationId;
	String cityName;
	public String getStationName() {
		return stationName;
	}
	public void setStationName(String stationName) {
		this.stationName = stationName;
	}
	public int getStationId() {
		return stationId;
	}
	public void setStationId(int stationId) {
		this.stationId = stationId;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public Stations(String stationName, int stationId, String cityName) {
		super();
		this.stationName = stationName;
		this.stationId = stationId;
		this.cityName = cityName;
	}
	@Override
	public String toString() {
		return "Stations [stationName=" + stationName + ", stationId=" + stationId + ", cityName=" + cityName + "]";
	}
	
}
