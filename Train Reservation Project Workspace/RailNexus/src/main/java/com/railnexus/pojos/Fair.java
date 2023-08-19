package com.railnexus.pojos;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.railnexus.pojos.enums.ClassType;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "fair")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
public class Fair extends SuperId {

	private float fair;

	@Enumerated(EnumType.STRING)
	@Column(name = "class_type", length = 30)
	private ClassType classType;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "train_no")
	private Train train;

	@Column(name = "dist_for_fair")
	private Double fairPerKm;



}
