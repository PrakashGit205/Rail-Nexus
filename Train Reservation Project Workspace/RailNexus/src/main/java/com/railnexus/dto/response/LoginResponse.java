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
public class LoginResponse {
//	public LoginResponse(boolean b) {
//		this.isValid = b;
//	}
	private String token;
//	private String mesg;
//	private boolean isValid;
//	private Long id;
	private String firstName;
	private String lastName;
	private String address;
	private String email;
	private String userName;
	private LocalDate regDate;
	private String mobile;
	private String role;
//	private String gender;
//	private Boolean isValid;
}
