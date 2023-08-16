package com.railnexus.services.interfaces;

import java.util.List;

import com.railnexus.dto.AddStationDTO;
import com.railnexus.dto.response.StationResponseDTO;
import com.railnexus.pojos.Station;

public interface IStationService {
List<StationResponseDTO> allStations();

Station addStation(AddStationDTO station);
}
