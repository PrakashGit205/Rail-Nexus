package com.railnexus.services.interfaces;

import com.railnexus.dto.AddPassengerDTO;
import com.railnexus.pojos.Passenger;

public interface IPassengerService {
	Passenger addPassenger(AddPassengerDTO dto);
}
