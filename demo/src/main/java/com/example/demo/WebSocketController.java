package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
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
    
    @MessageMapping("/prueba")
    @SendTo("/topic/gameData")
    public void prueba() {
        System.out.println("estoy en PRUEBA");
    }
}
