package com.example.demo;

import java.util.ArrayList;
import java.util.List;

public class GameData {
    private String player1Name;
    private double player1X;
    private double player1Y;

    private String player2Name;
    private double player2X;
    private double player2Y;

    private List<Boolean> collectedCoins;
    private List<Boolean> activatedLevers;
    private long elapsedTimeInSeconds;

    // Constructor
    public GameData() {
        this.collectedCoins = new ArrayList<>();
        this.activatedLevers = new ArrayList<>();
    }

    // Getters and Setters

    public double getPlayer1X() {
        return player1X;
    }

    public void setPlayer1X(double player1X) {
        this.player1X = player1X;
    }

    public double getPlayer1Y() {
        return player1Y;
    }

    public void setPlayer1Y(double player1Y) {
        this.player1Y = player1Y;
    }

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
}
