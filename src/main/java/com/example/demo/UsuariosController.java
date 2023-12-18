package com.example.demo;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsuariosController {

	
	List<Usuario> myUsers = new CopyOnWriteArrayList<Usuario>();
	
	private long id = 0;
	//REGISTRAR USUARIO
	@PostMapping("/Usuarios")
	public ResponseEntity<Usuario> registerUser(@RequestBody Usuario user) {

		boolean added = false;
		
		if(user.getPassword()!=null && user.getUsername() != null) {
			if(!isOnList(user)) {
				user.setID(id);
				id++;
				myUsers.add(user);
				added = true;
				System.out.println("Usuario registrado: " + user.getUsername() + " " + user.getPassword());
			}
		}
		
		if(added) {
			return new ResponseEntity<>(user, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	private boolean isOnList(Usuario user) {
		
		boolean is = false;
		
		for(int i = 0; i< myUsers.size(); i++) {
			if(myUsers.get(i).getUsername().equals(user.getUsername()) && 
					myUsers.get(i).getPassword().equals(user.getPassword())) {
				is = true;
			}
		}
		return is;
	}

	private Usuario findUserByUsername(String user) {
		
		
		for(int i = 0; i< myUsers.size(); i++) {
			if(myUsers.get(i).getUsername().equals(user)) {
				return (new Usuario(myUsers.get(i).getUsername(), myUsers.get(i).getPassword()));
			}
		}
		return new Usuario();
	}
	//LogIn
	
	@GetMapping("/Usuarios/{user}")
	public ResponseEntity<Usuario> logIn(@PathVariable String user) {
	
		//System.out.println(username + " Usuario recibido por parámetro");
		
		for(int i = 0; i<myUsers.size();i++) {
			System.out.println(myUsers.get(i).getUsername() + "  " + user);
			System.out.println(myUsers.get(i).getUsername().equals(user));

		}
		
		Usuario u = findUserByUsername(user);
		
		if(u.getPassword()!= null) {
			return new ResponseEntity<>(u, HttpStatus.OK);
		}
		else {
			//return new ResponseEntity<>(aux, HttpStatus.OK);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
}
