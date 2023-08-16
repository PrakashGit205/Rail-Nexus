package com.railnexus.services.interfaces;

import java.util.List;

import com.railnexus.pojos.Seat;

public interface ISeatService {
	List<Seat> showAvailableSeats(Long trainNo);
	
}
