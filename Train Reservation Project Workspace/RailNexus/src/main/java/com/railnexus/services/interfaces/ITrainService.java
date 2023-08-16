package com.railnexus.services.interfaces;

import com.railnexus.dto.AddTrainDTO;
import com.railnexus.dto.response.TrainResponseDTO;
import com.railnexus.pojos.Train;

public interface ITrainService {
	public TrainResponseDTO addTrain(AddTrainDTO train);
}
