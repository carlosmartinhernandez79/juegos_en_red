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

    @MessageMapping("/updateGameData")
    @SendTo("/topic/gameData")
    public GameData updateGameData(GameData gameData) {
        System.out.println("estoy en UpdateData");
        // Procesa la actualización de GameData
        // Puedes hacer las operaciones necesarias aquí

        // Envía la actualización a todos los clientes suscritos al topic "/topic/gameData"
        return gameData;
    }
    
    //WORKS ME CAGO EN DIOS SIUUUUUUUUUUUUUUUUUUUUUUUUUU
    @MessageMapping("/prueba")
    @SendTo("/topic/gameData")
    public void prueba() {
        System.out.println("estoy en PRUEBA");
    }
    
    
    @MessageMapping("/prueba2")
    @SendTo("/topic/gameData")
    public void prueba2(String s) {
        System.out.println("estoy en PRUEBA: ha llegado la palabra " + s );
    }
    
    @MessageMapping("/prueba3")
    @SendTo("/topic/gameData")
    public void prueba3(Mensajes m) {
        System.out.println("estoy en PRUEBA: ha llegado el mensaje " + m.getMessage() + " escrito por " + m.getName() );
    }
    

    @MessageMapping("/prueba4")
    @SendTo("/topic/prueba4")
    public Mensajes prueba4(@Payload Mensajes m, SimpMessageHeaderAccessor HA) {
        System.out.println("estoy en PRUEBA 4: ha llegado el mensaje " + m.getMessage() + " escrito por " + m.getName() );
        Object o = HA.getSessionAttributes().put("name",m.getName());
        System.out.println("Los atributos: " + HA.getSessionAttributes().put("name",m.getName()));
        System.out.println("Los atributos: " + HA.getSessionAttributes().get("name"));
        
        return m;
    
    }
}
