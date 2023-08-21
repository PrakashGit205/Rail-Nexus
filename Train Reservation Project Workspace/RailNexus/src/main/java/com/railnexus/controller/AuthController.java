package com.railnexus.controller;



import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railnexus.dto.LoginRequestDTO;
import com.railnexus.dto.response.LoginResponse;
import com.railnexus.jwtutills.JwtUtils;
import com.railnexus.pojos.User;
import com.railnexus.security.CustomUserDetails;
import com.railnexus.services.UserService;

@RestController
@RequestMapping("/signin")
@CrossOrigin(origins = "*")
public class AuthController {
//dep :
	@Autowired
	private AuthenticationManager manager;
	@Autowired
	private JwtUtils utils;
	@Autowired
	private UserService userService;
	
	@Autowired
	private ModelMapper mapper;
	/*
	 * request payload : Auth req DTO : email n password resp payload : In case of
	 * success : Auth Resp DTO : mesg + JWT token + SC 200 IN case of failure : SC
	 * 401
	 */
	@PostMapping()
	public ResponseEntity<?> signIn(@RequestBody LoginRequestDTO request) {
		// Authentication i/f ---> implemented by UserNamePasswordAuthToken
		System.out.println(request);
				UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getEmail(),
						request.getPassword());
				//log.info("auth token " + authToken);
			//	try {
					// authenticate the credentials
					Authentication authentication = manager.authenticate(authToken);
					//log.info("auth token again " + authentication.getPrincipal().getClass());
					CustomUserDetails userDetails=(CustomUserDetails)authentication.getPrincipal();
					User user = userDetails.getUser();
					LoginResponse resp = mapper.map(user,LoginResponse.class);
					resp.setToken(utils.generateJwtToken(authentication));
					// => auth succcess
					return ResponseEntity.ok(resp);
			//		return ResponseEntity.ok(new AuthResp("Auth successful!", utils.generateJwtToken(authenticatedDetails)));
//				} catch (BadCredentialsException e) { // replaced  by a method in global exc handler
//					// send back err resp code
//					System.out.println("err " + e);
//					return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
//				}
	}
}
