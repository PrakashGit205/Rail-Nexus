package com.railnexus.pojos;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.railnexus.pojos.enums.TrainType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "trains")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Train extends SuperId {

	@OneToMany(mappedBy = "train")
	
	private List<Passenger> passengers = new ArrayList<>();

	public boolean addPassenger(Passenger passenger) {
		passenger.setTrain(this);
		return passengers.add(passenger);
	}

	public boolean removePassenger(Passenger passenger) {
		passenger.setTrain(null);
		return passengers.remove(passenger);
	}

	@ManyToMany(mappedBy = "trains")
	private List<Station> trainRoute = new ArrayList<>();

	public boolean addStationToRoute(Station station) {
		trainRoute.add(station);
		return station.getTrains().add(this);
	}

	public boolean removeStationFromRoute(Station station) {
		trainRoute.remove(station);
		return station.getTrains().remove(this);
	}

	@OneToMany(mappedBy = "train", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<Fair> fairs = new ArrayList<>();

	public boolean addFair(Fair fair) {
		fair.setTrain(this);
		return fairs.add(fair);
	}

	public boolean removeFair(Fair fair) {
		fair.setTrain(null);
		return fairs.remove(fair);
	}

	@OneToMany(mappedBy = "train", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<Seat> seats = new ArrayList<>();

	public boolean addSeat(Seat seat) {
		seat.setTrain(this);
		return seats.add(seat);
	}

	public boolean removeSeat(Seat seat) {
		seat.setTrain(null);
		return seats.remove(seat);
	}

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "origin_station", nullable = false)
	private Station originStation;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "destination_station", nullable = false)
	private Station destinationStation;

	public boolean addOriginStation(Station station) {
		originStation = station;
		return station.getOriginatingTrains().add(this);
	}

	public boolean addDestinationStation(Station station) {
		destinationStation = station;
		return station.getTerminatingTrains().add(this);
	}

	@Column(name = "train_no")
	private Long trainNo;

	@Column(name = "train_name", length = 100, nullable = false)
	private String trainName;
	@Column(name = "origin_time")
//	@JsonFormat(pattern = "HH:mm:ss")
	private LocalTime originTime;

	@Column(name = "origin_dest_distance")
	private Double originDestDistance;

	@Enumerated(EnumType.STRING)
	@Column(length = 15, name = "train_type")
	private TrainType trainType;

	@Column(name = "mon")
	private boolean monday;

	@Column(name = "tue")
	private boolean tuesday;

	@Column(name = "wed")
	private boolean wednesday;

	@Column(name = "thu")
	private boolean thursday;

	@Column(name = "fri")
	private boolean friday;

	@Column(name = "sat")
	private boolean saturday;

	@Column(name = "sun")
	private boolean sunday;

	public Train(Long trainNo, String trainName, Station originStation, Station destinationStation,
			LocalTime originTime, Double originDestDistance, List<Station> trainRoute, TrainType trainType) {
		super();
		this.trainNo = trainNo;
		this.trainName = trainName;
		this.originStation = originStation;
		this.destinationStation = destinationStation;
		this.originTime = originTime;
		this.originDestDistance = originDestDistance;
		this.trainRoute = trainRoute;
		this.trainType = trainType;
	}

	@Override
	public int hashCode() {
		return Objects.hash(trainNo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Train other = (Train) obj;
		return Objects.equals(trainNo, other.trainNo);
	}

}
