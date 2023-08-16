package com.railnexus.dto;

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
public class AddPassengerDTO {
	private String name;

	private String gender;

	private Long userId;

	private Long destinationStationId;

	private Long sourceStationId;

	private Long trainNo;
}
