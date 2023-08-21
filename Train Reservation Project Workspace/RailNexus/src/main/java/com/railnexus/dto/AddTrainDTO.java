package com.railnexus.dto;

import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.railnexus.pojos.Station;
import com.railnexus.pojos.enums.TrainType;

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
public class AddTrainDTO {
	private Long trainNo;
	private String trainName;
	private Long originStationId;
	private Long destinationStationId;
//	@JsonFormat(pattern = "HH:mm:ss")
	private LocalTime originTime;
	private Double originDestDistance;
	private TrainType trainType;
	private boolean monday;
	private boolean tuesday;
	private boolean wednesday;
	private boolean thursday;
	private boolean friday;
	private boolean saturday;
	private boolean sunday;
}
