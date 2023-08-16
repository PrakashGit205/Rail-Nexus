package com.railnexus.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.railnexus.pojos.Station;

public interface StationDao extends JpaRepository<Station, Long> {

}
