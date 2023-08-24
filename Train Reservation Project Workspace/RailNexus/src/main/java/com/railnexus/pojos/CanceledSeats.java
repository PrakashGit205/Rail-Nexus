package com.railnexus.pojos;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "canceled_seats")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
public class CanceledSeats extends SuperId{
	private String boogie;
	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JoinColumn(name = "train_id")
	private Train train;
	
//	@Enumerated(EnumType.STRING)
	@Column(length = 20, name = "class_type")
	private String classType;
	
//	@Enumerated(EnumType.STRING)
	@Column(length = 20, name = "seat_type")
	private String seatType;
	
	
	
}
