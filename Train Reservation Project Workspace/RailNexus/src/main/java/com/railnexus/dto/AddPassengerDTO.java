package com.railnexus.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AddPassengerDTO {
	private String id;

	private String name;

	private String gender;

	private Long userId;

	private String mobile;
	
	private int age;
	
	private Boolean disability;
	
	private Long destinationStationId;

	private Long sourceStationId;

	private Long trainId;

	private String classType;

	private String seatType;

	private float fair;

	private LocalDate originDate;

	private LocalTime sourceTime;

	private LocalTime destinationTime;
	
	

}
