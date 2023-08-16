package com.railnexus.dto;

import java.time.LocalTime;

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
public class AddStationDTO {
	
	private String name;

	
	private String code;

	
	private String cityName;
	
	

}
