package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.RunningTrain;

public interface RunningTrainDao extends JpaRepository<RunningTrain, Long>{

}
