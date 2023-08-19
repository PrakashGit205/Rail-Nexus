package com.railnexus.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AddUserDTO {
	private String firstName;
    private String lastName;
    private String address;
    private String email;
    private String userName;
    private String mobile;
    private String gender;
    private String password;
    private String role;
}
