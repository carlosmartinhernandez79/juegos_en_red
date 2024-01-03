package com.example.demo;

public class Mensajes {
	
	private String name;
	private String message;
	
	Mensajes(String name,String message){
		this.name = name;
		this.message = message;
	}
	
	public String getMessage() {
		return message;
	}
	
	public String getName() {
		return name;
	}
	
}
