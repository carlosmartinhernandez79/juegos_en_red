package com.example.demo;

public class Usuario {

	private long id = 1;
	private String username;
	private String password;
	
	public Usuario(){
		
	}
	
	public Usuario(String username, String password){
		
		this.username = username;
		this.password = password;
		this.id = 0;
	}
	
	public String getUsername() {
		return username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public long getID() {
		return id;
	}
	
	public void setID(long i) {
		id = i;
	}
	
	
	
	
	
	
}
