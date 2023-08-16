package com.railnexus.pojos;

//import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "stations")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)

public class Station extends SuperId {

	@Column(name = "name", length = 80, nullable = false)
	private String name;

	@Column(name = "code", length = 10, nullable = false)
	private String code;

	@Column(name = "cityName", length = 30, nullable = false)
	private String cityName;

	@ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE }, fetch = FetchType.LAZY)
	@JoinTable(name = "trains_stations", joinColumns = @JoinColumn(name = "station_id"), inverseJoinColumns = @JoinColumn(name = "train_no"))
	private Set<Train> trains = new HashSet<>();

	public boolean addTrainRouteToStation(Train train) {
		train.getTrainRoute().add(this);
		return trains.add(train);
	}

	public boolean removeTrainFromStation(Train train) {
		train.getTrainRoute().remove(this);
		return trains.remove(train);
	}

	@OneToMany(mappedBy = "originStation", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Train> originatingTrains = new HashSet<>();

	@OneToMany(mappedBy = "destinationStation", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Train> terminatingTrains = new HashSet<>();

	@OneToMany(mappedBy = "originStation", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Distance> originatingTrainsDist = new HashSet<>();

	@OneToMany(mappedBy = "destinationStation", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Distance> terminatingTrainsDist = new HashSet<>();

	// Constructors, getters, setters, and other methods

	public boolean addOriginatingTrain(Train train) {
		train.setOriginStation(this);
		return originatingTrains.add(train);
	}

	public boolean addTerminatingTrain(Train train) {
		train.setDestinationStation(this);
		return terminatingTrains.add(train);
	}

	public boolean removeOriginatingTrain(Train train) {
		train.setOriginStation(null);
		return originatingTrains.remove(train);
	}

	public boolean removeTerminatingTrain(Train train) {
		train.setDestinationStation(null);
		return terminatingTrains.remove(train);
	}

	public boolean addTrain(Train train) {
		return trains.add(train);
	}

	public boolean removeTrain(Train train) {
		return trains.remove(train);
	}

//	@Override
//	public int hashCode() {
//		return Objects.hash(id);
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Station other = (Station) obj;
//		return id == other.id;
//	}

}
