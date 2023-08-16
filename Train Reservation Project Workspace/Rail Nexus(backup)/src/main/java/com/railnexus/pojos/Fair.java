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
	@Column(name = "seat_type", length = 30)
	private ClassType classType;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "train_no")
	private Train train;

	@Column(name = "dist_for_fair")
	private Double fairPerKm;

//	@Override
//	public int hashCode() {
//		final int prime = 31;
//		int result = super.hashCode();
//		result = prime * result + Objects.hash(getId());
//		return result;
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (!super.equals(obj))
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Fair other = (Fair) obj;
//		return Float.floatToIntBits(getId()) == Float.floatToIntBits(other.getId());
//	}

}
