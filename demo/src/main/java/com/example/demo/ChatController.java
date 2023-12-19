package com.example.demo;

import java.util.ArrayList;
import java.util.List;

//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/Chat")
public class ChatController {

	
	private int numberOfMessages = -1;
	
	private List<Message> messages = new ArrayList<>();

    @GetMapping("/getMessages")
    public List<Message> getMessages() {
    	
            return messages;
    }

    @PostMapping("/sendMessages")
    public String sendMessage(@RequestBody Message message) {
        messages.add(message);
        
        return "Mensaje enviado";

    }
}
	

