package com.railnexus.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.railnexus.pojos.enums.ClassType;
import com.railnexus.pojos.enums.SeatStatus;
import com.railnexus.pojos.enums.SeatType;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "seat_history")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
/**
 *
 */
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
public class SeatHistory extends SuperId {
	
	private String boogieNo;
	
	@JoinColumn(name = "train_id")
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
	private Train train;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private ClassType classType;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private SeatType seatType;

	
	private int vacantSeat;

	private LocalDateTime endTime;

}
