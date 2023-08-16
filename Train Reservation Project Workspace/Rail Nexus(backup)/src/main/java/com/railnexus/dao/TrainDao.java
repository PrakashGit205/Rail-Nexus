package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.Train;

public interface TrainDao extends JpaRepository<Train, Long> {

}
