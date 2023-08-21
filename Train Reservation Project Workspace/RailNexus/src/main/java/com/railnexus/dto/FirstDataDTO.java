package com.railnexus.dto;

import java.time.LocalDate;

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
public class FirstDataDTO {
	Long originId;
	Long sourceId;
	LocalDate originDate;
	
}
