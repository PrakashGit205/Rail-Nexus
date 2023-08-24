package com.railnexus.services.interfaces;

import com.railnexus.dto.AddPassengerDTO;
import com.railnexus.dto.response.PassengerResponseDTO;
import com.railnexus.pojos.Passenger;

public interface IPassengerService {
	PassengerResponseDTO addPassenger(AddPassengerDTO dto);
}
