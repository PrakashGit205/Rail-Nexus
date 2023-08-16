package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.Distance;

public interface DistanceDao extends JpaRepository<Distance, Long> {

}
