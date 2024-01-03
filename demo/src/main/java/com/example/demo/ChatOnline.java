package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;


@Controller
public class ChatOnline {
	
	private List<String> chatMessages = new ArrayList<>();
    
    
    @MessageMapping("/setChat")
    @SendTo("/topic/chatOnline")
    public List<String> setChat(String message) {
        chatMessages.add(message);
        System.out.println(chatMessages);
        return chatMessages;
    }

}

