package com.example.demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
public class ChatBlockController {

	private List<Chat> chatArray = new ArrayList<>();
	
	//Chat myChat = new Chat();
	//String[] chat = new String[100];
	
	
	//REGISTRAR Chat
	@PostMapping("/Chat")
	public String addData(@RequestBody Chat blockText) {

		chatArray.add(blockText);
		System.out.println("He metido la linea: " + blockText);
		
		System.out.println("Se ha registrado: " + blockText);
        return "Texto recibido correctamente";
	}
	
	
	//Leer chat
/*	@GetMapping("/Chat")
	public String[] getChat() {
	
				
		
	}*/
	
}
