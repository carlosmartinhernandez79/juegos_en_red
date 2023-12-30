package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class gameState {
  
    /*@MessageMapping("/prueba")
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
    
    }*/
	

    
    private Vex posElfo;
    private Vex posGnomo;
   

    private final SimpMessagingTemplate messagingTemplate;

    @Autowired
    public gameState(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
        posElfo = new Vex(0,0);
        posGnomo = new Vex(0,0);
    }
  
    
    //SETTERS Y GETTERS DE LAS POSICIONES DE LOS PERSONAJES
    //Basicamente, llega información actualizada y actualiza las posiciones
    @MessageMapping("/setPosElfo")
    @SendTo("/topic/getPosElfo")
    public Vex setPosElfo(@Payload Vex v, SimpMessageHeaderAccessor HA) {
	   posElfo.setX(v.getX());
	   posElfo.setY(v.getY());
	   System.out.println("El mensaje ha llegado correctamente: x = " + v.getX());
	   return v;
    }
    
   
    @MessageMapping("/setPosGnomo")
    @SendTo("/topic/getPosGnomo")
    public Vex setPosGnomo(@Payload Vex v, SimpMessageHeaderAccessor HA) {
    	
    	posGnomo.setX(v.getX());
    	posGnomo.setY(v.getY());
    	return v;
    }
}
