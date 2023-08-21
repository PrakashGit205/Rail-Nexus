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
	private float fair;
	public LiveSeatResponse(String classType, LocalDate destinationTime, Long availableSeats) {
		super();
		this.classType = classType;
		this.destinationTime = destinationTime;
		this.availableSeats = availableSeats;
	}

}
