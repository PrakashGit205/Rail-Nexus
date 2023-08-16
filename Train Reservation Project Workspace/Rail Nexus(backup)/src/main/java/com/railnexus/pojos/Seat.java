package com.railnexus.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.railnexus.pojos.enums.ClassType;
import com.railnexus.pojos.enums.SeatType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name  = "seats")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Seat extends SuperId{
	
	
	private String boogie;
	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private Train train;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20, name = "class_type")
	private ClassType classType;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20, name = "seat_type")
	private SeatType seatType;
	
	@Column(name = "total_seat")
	private int totalSeat;
	
	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return super.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		return super.equals(obj);
	}
	
}
