package com.railnexus.dto.response;

import java.time.LocalDate;

import java.time.LocalDate;

import com.railnexus.pojos.Station;
import com.railnexus.pojos.Train;
import com.railnexus.pojos.User;

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
public class PassengerResponseDTO {
	private Long id;

	private String name;

	private String gender;

	private Long userId;

	private String destinationStationName;

	private String sourceStationName;

	private Long trainNo;

	private String PNR;

	private String classType;

	private String seatType;

	private String seatNo;

	private String boogieNo;

	private String mobile;

	private String seatStatus;

	private String sourceTime;

	private String destinationTime;
	
	private LocalDate trainDepartureDate;
	
	private LocalDate bookingDate;
//	private String sourceTime;
}
