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
public class DistanceResponseDTO {
	private Long originStationId;

	private Long destinationStationId;

	private float distance;
}
