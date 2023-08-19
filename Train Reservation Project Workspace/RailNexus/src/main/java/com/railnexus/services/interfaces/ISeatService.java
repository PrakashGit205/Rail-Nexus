package com.railnexus.services.interfaces;

import java.util.List;

import com.railnexus.dto.response.SeatResponseDTO;
import com.railnexus.pojos.Seat;

public interface ISeatService {
	List<SeatResponseDTO> showAvailableSeats(Long trainNo);
	
}
