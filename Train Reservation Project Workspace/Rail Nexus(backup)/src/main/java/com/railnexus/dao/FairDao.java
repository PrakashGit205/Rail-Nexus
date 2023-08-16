package com.railnexus.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.Fair;
import com.railnexus.pojos.Train;
import com.railnexus.pojos.enums.ClassType;



public interface FairDao extends JpaRepository<Fair, Long> {
	List<Fair> findByTrainId(Long trainNo);
	List<Fair> findByClassTypeAndTrainId(ClassType classType,Long trainNo);
}
