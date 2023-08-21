package com.railnexus.dto.response;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.railnexus.pojos.Train;
import com.railnexus.pojos.enums.ClassType;
import com.railnexus.pojos.enums.SeatType;

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
public class SeatResponseDTO {
	private Long seatId;
	
	
	
	private String classType;

	private String seatType;

	private int totalSeat;
	

}
