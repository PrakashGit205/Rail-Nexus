package com.irctc.train;

import java.sql.Time;

public class Trains {
	private int trainNo;
	private String trainName;
	private int startStationId;
	private int endStationId;
	private Time startTime;
	private Time endTime;
	private double SrcDestDist;
	int mon;
	int tue;
	int wed;
	int thu;
	int fri;
	int sat;
	int sun;
	public int getTrainNo() {
		return trainNo;
	}
	public void setTrainNo(int trainNo) {
		this.trainNo = trainNo;
	}
	public String getTrainName() {
		return trainName;
	}
	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}
	public int getStartStationId() {
		return startStationId;
	}
	public void setStartStationId(int startStationId) {
		this.startStationId = startStationId;
	}
	public int getEndStationId() {
		return endStationId;
	}
	public void setEndStationId(int endStationId) {
		this.endStationId = endStationId;
	}
	public Time getStartTime() {
		return startTime;
	}
	public void setStartTime(Time startTime) {
		this.startTime = startTime;
	}
	public Time getEndTime() {
		return endTime;
	}
	public void setEndTime(Time endTime) {
		this.endTime = endTime;
	}
	public double getSrcDestDist() {
		return SrcDestDist;
	}
	public void setSrcDestDist(double srcDestDist) {
		SrcDestDist = srcDestDist;
	}
	public int getMon() {
		return mon;
	}
	public void setMon(int mon) {
		this.mon = mon;
	}
	public int getTue() {
		return tue;
	}
	public void setTue(int tue) {
		this.tue = tue;
	}
	public int getWed() {
		return wed;
	}
	public void setWed(int wed) {
		this.wed = wed;
	}
	public int getThu() {
		return thu;
	}
	public void setThu(int thu) {
		this.thu = thu;
	}
	public int getFri() {
		return fri;
	}
	public void setFri(int fri) {
		this.fri = fri;
	}
	public int getSat() {
		return sat;
	}
	public Trains(int trainNo, String trainName, int startStationId, int endStationId, Time startTime, Time endTime,
			double srcDestDist) {
		super();
		this.trainNo = trainNo;
		this.trainName = trainName;
		this.startStationId = startStationId;
		this.endStationId = endStationId;
		this.startTime = startTime;
		this.endTime = endTime;
		SrcDestDist = srcDestDist;
	}
	public void setSat(int sat) {
		this.sat = sat;
	}
	public int getSun() {
		return sun;
	}
	public void setSun(int sun) {
		this.sun = sun;
	}
	@Override
	public String toString() {
		return "Trains [trainNo=" + trainNo + ", trainName=" + trainName + ", startStationId=" + startStationId
				+ ", endStationId=" + endStationId + ", startTime=" + startTime + ", endTime=" + endTime
				+ ", SrcDestDist=" + SrcDestDist + "]";
	}
	 

}
