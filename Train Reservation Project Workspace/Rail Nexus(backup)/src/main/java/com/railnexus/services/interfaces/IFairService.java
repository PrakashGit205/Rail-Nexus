package com.railnexus.services.interfaces;

import java.util.List;

import com.railnexus.pojos.Fair;
import com.railnexus.pojos.Seat;

public interface IFairService {

	List<Fair> showFairByTrainId(Long trainNo);
	List<Fair> showBoogieFair(Long trainNo,String classType);

}
