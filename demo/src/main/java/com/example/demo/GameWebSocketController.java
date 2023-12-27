package com.example.demo;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GameWebSocketController {
    @MessageMapping("/player-position")
    @SendTo("/topic/player-position-updates")
    public PlayerPosition updatePlayerPosition(PlayerPosition playerPosition) {
        // Lógica para manejar las actualizaciones de posición de los jugadores
        return playerPosition;
    }
}
