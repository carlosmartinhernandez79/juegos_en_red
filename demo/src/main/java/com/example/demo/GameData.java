package com.example.demo;

import java.util.ArrayList;
import java.util.List;

public class GameData {

    private PlayerData player1;

    private PlayerData player2;

    private List<Boolean> collectedCoins;
    private List<Boolean> activatedLevers;
    private long elapsedTimeInSeconds;
    private List<BoxData> boxes;

    // Constructor
    public GameData() {
        this.collectedCoins = new ArrayList<>();
        this.activatedLevers = new ArrayList<>();
    }

    // Getters and Setters

    // Datos Jugadores
    public PlayerData getPlayer1() {
        return player1;
    }
    
    public void setPlayer1(PlayerData player1) {
        this.player1 = player1;
    }

    public PlayerData getPlayer2() {
        return player2;
    }

    public void setPlayer2(PlayerData player2) {
        this.player2 = player2;
    }

    // Datos escena

    public List<Boolean> getCollectedCoins() {
        return collectedCoins;
    }

    public void setCollectedCoins(List<Boolean> collectedCoins) {
        this.collectedCoins = collectedCoins;
    }

    public List<Boolean> getActivatedLevers() {
        return activatedLevers;
    }

    public void setActivatedLevers(List<Boolean> activatedLevers) {
        this.activatedLevers = activatedLevers;
    }

    public long getElapsedTimeInSeconds() {
        return elapsedTimeInSeconds;
    }

    public void setElapsedTimeInSeconds(long elapsedTimeInSeconds) {
        this.elapsedTimeInSeconds = elapsedTimeInSeconds;
    }

    public List<BoxData> getBoxes() {
        return boxes;
    }

    public void setBoxes(List<BoxData> boxes) {
        this.boxes = boxes;
    }

}
