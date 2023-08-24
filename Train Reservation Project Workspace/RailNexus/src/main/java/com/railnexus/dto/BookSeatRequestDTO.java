package com.railnexus.dto;

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
public class BookSeatRequestDTO {
	private LocalDate originDate;
	private Long trainId;
	private String classType;
	private String seatType;
	
}
