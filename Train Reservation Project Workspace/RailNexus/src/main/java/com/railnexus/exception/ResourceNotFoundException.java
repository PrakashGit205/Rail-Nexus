package com.railnexus.exception;

public class ResourceNotFoundException extends RuntimeException {
	/**
	 * to remove warning
	 */
	private static final long serialVersionUID = 1L;

	public ResourceNotFoundException(String mesg) {
		super(mesg);
	}
}

