package com.example.demo;

import java.util.concurrent.ConcurrentHashMap;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GameWebSocketController {

    // Utilizamos ConcurrentHashMap para gestionar la concurrencia
    private final ConcurrentHashMap<String, PlayerPosition> playerPositions = new ConcurrentHashMap<>();
    @MessageMapping("/player-position")
    @SendTo("/topic/player-position-updates")
    public PlayerPosition updatePlayerPosition(PlayerPosition playerPosition) {
        // Lógica para manejar las actualizaciones de posición de los jugadores
        playerPositions.put(playerPosition.getPlayerId(), playerPosition);

        return playerPosition;
    }
}
