package com.railnexus.dto;

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
public class UpdateUserDTO {
	private Long id;
	private String firstName;
    private String lastName;
    private String address;
    private String email;
    private String userName;
    private String mobile;
    private String gender;
}
