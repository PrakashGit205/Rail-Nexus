package com.railnexus.dto.response;

import com.railnexus.pojos.Train;
import com.railnexus.pojos.enums.ClassType;

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
public class FairResponseDTO {
	private float fair;

	private String classType;

	private Long trainNo;

	private Double fairPerKm;
}
