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
public class Train {

	@ManyToMany(mappedBy = "trains")
	private List<Station> trainRoute = new ArrayList<>();
	@OneToMany(mappedBy = "train", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<Fair> fairs = new ArrayList<>();

	@OneToMany(mappedBy = "train", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<Seat> seats = new ArrayList<>();

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "origin_station", nullable = false)
	private Station originStation;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "destination_station", nullable = false)
	private Station destinationStation;

	@Id
	@Column(name = "train_no")
	private Long id;

	@Column(name = "train_name", length = 100, nullable = false)
	private String trainName;
	@Column(name = "origin_time")
	private LocalTime originTIme;

	@Column(name = "origin_dest_distance")
	private Double originDestDistance;

	@Enumerated(EnumType.STRING)
	@Column(length = 15, name = "train_type")
	private TrainType trainType;

	public List<Fair> getFairs() {
		return fairs;
	}

	public void setFairs(List<Fair> fairs) {
		this.fairs = fairs;
	}

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

	public boolean addRoute(Station station) {
		return trainRoute.add(station);
	}

	public boolean removeRoute(Station station) {
		return trainRoute.remove(station);
	}

	public Train(Long trainNo, String trainName, Station originStation, Station destinationStation,
			LocalTime originTIme, Double originDestDistance, List<Station> trainRoute, TrainType trainType) {
		super();
		this.id = trainNo;
		this.trainName = trainName;
		this.originStation = originStation;
		this.destinationStation = destinationStation;
		this.originTIme = originTIme;
		this.originDestDistance = originDestDistance;
		this.trainRoute = trainRoute;
		this.trainType = trainType;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
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
		return Objects.equals(id, other.id);
	}

}
