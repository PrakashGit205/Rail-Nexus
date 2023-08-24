package com.railnexus.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.railnexus.pojos.enums.ClassType;
import com.railnexus.pojos.enums.SeatType;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "live_seats")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//@ToString
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
public class LiveSeat extends SuperId implements Comparable<LiveSeat> {

	private String boogie;
	
	@JoinColumn(name = "train_id")
	@ManyToOne(fetch = FetchType.LAZY)
	private Train train;
	
//	@Enumerated(EnumType.STRING)
	@Column(length = 20, name = "class_type")
	private String classType;
	
//	@Enumerated(EnumType.STRING)
	@Column(length = 20, name = "seat_type")
	private String seatType;
	
	@Column(name = "destination_time")
	private LocalDate destinationTime;
	
	@Column(name = "available_seats")
	private int availableSeats;

	@Override
	public int compareTo(LiveSeat o) {
		if(o.getId()==getId())
		return 0;
		else if (o.getId()>getId()) {
			return -1;
		}else
			return 1;
	}

	@Override
	public String toString() {
		return "id = " + getId()+" LiveSeat [boogie=" + boogie + ", train=" + train.getTrainName() + ", classType=" + classType + ", seatType=" + seatType
				+ ", destinationTime=" + destinationTime + ", availableSeats=" + availableSeats + "]";
	}
	
	
}
