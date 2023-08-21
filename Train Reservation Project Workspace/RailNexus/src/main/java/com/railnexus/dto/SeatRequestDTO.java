package com.railnexus.dto;

import java.time.LocalDate;
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
public class SeatRequestDTO {
private LocalDate originDate;
private Long trainNo;
private Long sourceId;
private Long originId;
}
