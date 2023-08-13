package com.railnexus.services.interfaces;

import com.railnexus.dto.AddTrainDTO;
import com.railnexus.pojos.Train;

public interface ITrainService {
	public Train addTrain(AddTrainDTO train);
}
