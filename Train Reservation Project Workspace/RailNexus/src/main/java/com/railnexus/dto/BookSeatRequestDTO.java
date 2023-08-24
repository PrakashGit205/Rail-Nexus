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
	private Long trainId;
	private LocalDate originDate;
	private String classType;
	private String seatType;
	public BookSeatRequestDTO(Long trainId, LocalDate originDate, String classType) {
		super();
		this.trainId = trainId;
		this.originDate = originDate;
		this.classType = classType;
	}
	
	
}
