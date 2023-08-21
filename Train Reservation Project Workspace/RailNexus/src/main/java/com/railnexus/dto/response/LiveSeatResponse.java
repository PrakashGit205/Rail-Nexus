package com.railnexus.dto.response;

import java.time.LocalDate;

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
public class LiveSeatResponse {
	private String classType;
//	private String seatType;
	private LocalDate destinationTime;
	private Long availableSeats;
}
