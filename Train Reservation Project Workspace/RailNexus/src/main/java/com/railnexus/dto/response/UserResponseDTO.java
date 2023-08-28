package com.railnexus.dto.response;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserResponseDTO {
	private Long id;
	 private String firstName;
	    private String lastName;
	    private String address;
	    private String email;
	    private String userName;
	    private LocalDate regDate;
	    private String mobile;
	    private String gender;
	    private String role;
	  
}
