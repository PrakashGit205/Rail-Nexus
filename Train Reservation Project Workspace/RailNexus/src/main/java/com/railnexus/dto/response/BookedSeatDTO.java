package com.railnexus.dto.response;

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
public class BookedSeatDTO {
//	id = 285 LiveSeat [boogie=S3, train=Ujjain Intercity, classType=GENERAL, seatType=WINDOW_BERTH, destinationTime=2023-08-24, availableSeats=20]
	private Long id;
	private String boogie;
	private String classType;
	private String seatType;
	private String destinationTime;
	private String seatNo;
}
