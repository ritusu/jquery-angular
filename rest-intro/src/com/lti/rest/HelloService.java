package com.lti.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/hello")
public class HelloService {

	@GET		//Get Method can be declared here
	public String hello() {
		return "Hello from Rest";	//Representational State Protocol																	
	}
}
