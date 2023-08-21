package com.railnexus.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.railnexus.pojos.enums.UserRoles;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User extends SuperId {
	@Column(name = "first_name", length = 50, nullable = false)
	private String firstName;
	@Column(name = "last_name", length = 50, nullable = false)
	private String lastName;
	@Column(length = 255)
	private String address;
	@Column(name = "email",length = 70,nullable = false,unique = true )
	private String email;
	@Column(name = "username",length = 100,nullable = false,unique = true )
	private String userName;
	@Column(name = "reg_date")
	private LocalDate regDate;
	@Column(name = "password",length = 100,nullable = false )
	private String password;
	@Column(name = "mobile",length = 15,nullable = false,unique = true )
	private String mobile;
	
	@Column(name = "gender",length = 10)
	private String gender;
	
//	@Enumerated(EnumType.STRING)
	@Column(length = 25, name = "role")
	private String role;;
	
	@OneToMany(mappedBy = "user")
	private List<Passenger> passengers = new ArrayList<>();
	
	@OneToMany(mappedBy = "user")
	private List<PassengerHistory> passengersHistory = new ArrayList<>();
	
	
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + Objects.hash(userName);
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(userName, other.userName);
	}
	

}
