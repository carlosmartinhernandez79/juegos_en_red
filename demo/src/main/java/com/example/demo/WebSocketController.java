package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    private final SimpMessagingTemplate messagingTemplate;

    @Autowired
    public WebSocketController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }
  
    
    //WORKS ME CAGO EN DIOS SIUUUUUUUUUUUUUUUUUUUUUUUUUU
    @MessageMapping("/prueba")
    @SendTo("/topic")
    public void prueba() {
        System.out.println("estoy en PRUEBA");
    }
    
    
    @MessageMapping("/prueba2")
    @SendTo("/topic")
    public void prueba2(String s) {
        System.out.println("estoy en PRUEBA: ha llegado la palabra " + s );
    }
    
    @MessageMapping("/prueba3")
    @SendTo("/topic")
    public void prueba3(Message m) {
        System.out.println("estoy en PRUEBA: ha llegado el mensaje " + m.getMessage() + " escrito por " + m.getSender());
    }
    

    @MessageMapping("/prueba4") //para que llegue el mensaje tengo que poner esto
    @SendTo("/topic/recibirPrueba4") //si el mensjae tiene return, se devolverá aquí
    public Message prueba4(@Payload Message m, SimpMessageHeaderAccessor HA) {
    	
        System.out.println("estoy en PRUEBA 4: ha llegado el mensaje " + m.getMessage() + " escrito por " + m.getSender() );
        Object o = HA.getSessionAttributes().put("name",m.getSender());
        System.out.println("Los atributos: " + HA.getSessionAttributes().put("name",m.getSender()));
        System.out.println("Los atributos: " + HA.getSessionAttributes().get("name"));
        
        return m;
    
    }
}
