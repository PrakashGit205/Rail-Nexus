package com.railnexus.dto.response;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;

import com.railnexus.pojos.Station;
import com.railnexus.pojos.Train;

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
public class RunningTrainResponseDTO {
	private Long id;
	private Long trainNo;
	private String trainName;
	private LocalDate originDate;
	private String originStatioin;
	private String departStation;
	private String runsOn;
	private LocalTime departTime;
	
	private Duration  duration;
//	private LocalTime deparTime;
	private LocalTime originTime;
	
}
