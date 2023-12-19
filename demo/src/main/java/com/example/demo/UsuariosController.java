package com.example.demo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class UsuariosController {

	
	List<Usuario> myUsers = new CopyOnWriteArrayList<Usuario>();
	
	@GetMapping("Usuarios/getIp")
    public String getClientIp(HttpServletRequest request) {
        String ip = request.getRemoteAddr();
        return ip;
    }

	
	//REGISTRAR USUARIO
	@PostMapping("/Usuarios")
	public ResponseEntity<Usuario> registerUser(@RequestBody Usuario user) {

		boolean added = false;
		
		if(user.getPassword()!="" && user.getUsername() !="") {
		     readFile();
			if(!isOnList(user)) {
				myUsers.add(user);
				added = true;
				writeUser(user);

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
			if(myUsers.get(i).getUsername().equals(user.getUsername())) {
				is = true;
			}
		}
		return is;
	}

	private Usuario findUserByUsername(String user) {
		
		
		for(int i = 0; i< myUsers.size(); i++) {
			System.out.println(myUsers.get(i).getUsername() == user);
			if(myUsers.get(i).getUsername().equals(user)) {
			
				return (new Usuario(myUsers.get(i).getUsername(), myUsers.get(i).getPassword()));
			}
		}
		return new Usuario();
	}
	//LogIn
	
	@GetMapping("/Usuarios/{user}")
	public ResponseEntity<Usuario> logIn(@PathVariable String user) {
	
		readFile();
		
		Usuario u = findUserByUsername(user);
		
		if(u.getPassword()!= null) {
			return new ResponseEntity<>(u, HttpStatus.OK);
		}
		else {
			//return new ResponseEntity<>(aux, HttpStatus.OK);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	private void writeUser(Usuario user) {
		
		   try {
	            FileWriter writer = new FileWriter("registeredUsers.txt", true);
	            BufferedWriter bufferedWriter = new BufferedWriter(writer);
	 
	            bufferedWriter.write(user.getUsername());
	            bufferedWriter.newLine();
	            bufferedWriter.write(user.getPassword());
	            bufferedWriter.newLine();
	 
	            bufferedWriter.close();
	        } catch (IOException e) {
	            e.printStackTrace();
	        }	
	}
	
	private void readFile() {
		
	      myUsers.clear(); //borramos la listas
	      
		  try {
			  	FileReader reader = new FileReader("registeredUsers.txt");
	            BufferedReader bufferedReader = new BufferedReader(reader);
	 
	            String line;
	            String username="";
	            String password="";
	            int count = 0;
	            int numeroUsers = 0;
	 
	            while ((line = bufferedReader.readLine()) != null) {
	                
	                if(count==2) {
	                	count = 0;
	                	Usuario u = new Usuario(username, password);
	                	numeroUsers++;
	                	if(!isOnList(u)){
		                	myUsers.add(u);
	                	}
	                }
	                
	                if(count==0) {
	                	username = line;
	                }
	                else if(count == 1) {
	                	password = line;
	                }
	                
	                count++;
	                         
	            }

	            Usuario u = new Usuario(username, password);
	            
	            myUsers.add(u);
	            
	            reader.close();
	 
	            System.out.println("Leyendo archivo de " + numeroUsers + " usuarios:");
	            for(int i = 0; i<myUsers.size();i++) {
	    			System.out.println(myUsers.get(i).getUsername() + "  " + myUsers.get(i).getPassword());
	    		}
	            System.out.println("");
	 
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	}
	
	
	private void writeList() {
	     
	     File oldFile = new File("registeredUsers.txt");
	     
		   try {
	            FileWriter writer = new FileWriter(oldFile);
	            BufferedWriter bufferedWriter = new BufferedWriter(writer);
	 
	            for(int i = 0; i<myUsers.size();i++) {
	            	bufferedWriter.write(myUsers.get(i).getUsername());
	            	bufferedWriter.newLine();
	            	bufferedWriter.write(myUsers.get(i).getPassword());
	            	bufferedWriter.newLine();
	            }
	 
	            bufferedWriter.close();
	        } catch (IOException e) {
	            e.printStackTrace();
	        }	
	}
	
	
	
	@PutMapping(value="/Usuarios/{username}")
    public ResponseEntity<Usuario> changePassword(@PathVariable String username, @RequestBody String newPsassword) {

        boolean changed = false;
        readFile();

        Usuario u = findUserByUsername(username);

        if(u.getPassword()!= null) {
        	
        	for(int i = 0; i<myUsers.size();i++) {
        		if(myUsers.get(i).getUsername().equals(username)) {
        			
        			myUsers.get(i).setPassword(newPsassword);
        			
        		}
            }
 
        	writeList();
       
            changed = true;
            System.out.println("Usuario " + u.getUsername()+ " A cambiado su contraseña de " + u.getPassword()+  " a " +newPsassword);
		      for(int i = 0; i<myUsers.size();i++) {
	    			System.out.println(myUsers.get(i).getUsername() + "  " + myUsers.get(i).getPassword());
	    		}
		      System.out.println("");
        }

        if(changed) {
            System.out.println("Contraseña cambiada");
            return new ResponseEntity<>(u, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
	
	
	@DeleteMapping(value="/Usuarios/{user}")
	public ResponseEntity<Usuario> deleteUser(@PathVariable String user){
		
	     readFile();
		
	     Usuario u = findUserByUsername(user);
	     
	     boolean deleted = false;
	    
	     
	     for(int i = 0; i<myUsers.size();i++) {
	     		if(myUsers.get(i).getUsername().equals(u.getUsername())) {
	     			
	     			myUsers.remove(i);
	     			
	     			deleted = true;
	     			
	     		}
	         }
			 
		     	  writeList();
			      readFile(); //leemos del archivos (añadimos el nuevo archivo a la lista)
			      
			      System.out.println("Usuarios de la lista después del borrado: ");
			      for(int i = 0; i<myUsers.size();i++) {
		    			System.out.println(myUsers.get(i).getUsername() + "  " + myUsers.get(i).getPassword());
		    		}
			      
			      System.out.println("");
	     
	     if(deleted) {

	 		return new ResponseEntity<>(u,HttpStatus.OK);
	        }
	     else {
		     return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	     }

	}
	
	private void deleteUserP(Usuario u) {
		
	     
	     for(int i = 0; i<myUsers.size();i++) {
     		if(myUsers.get(i).getUsername().equals(u.getUsername())) {
     			
     			myUsers.remove(i);
     			
     		}
         }
		 
	     	  writeList();
		      readFile(); //leemos del archivos (añadimos el nuevo archivo a la lista)
		      
		      System.out.println("Usuarios de la lista después del borrado: ");
		      for(int i = 0; i<myUsers.size();i++) {
	    			System.out.println(myUsers.get(i).getUsername() + "  " + myUsers.get(i).getPassword());
	    		}
		      
		      System.out.println("");
	}
}
