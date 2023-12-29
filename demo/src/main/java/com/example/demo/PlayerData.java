package com.example.demo;

public class PlayerData {

    private String playerName;

    private double playerX;
    private double playerY;

    private boolean movingRight;
    private boolean movingLeft;
    private boolean jumping;
    private boolean usingAbility;

    // Constructor
    public PlayerData() {
        this.playerName = "";
        this.playerX = 0;
        this.playerY = 0;
        this.movingRight = false;
        this.movingLeft = false;
        this.jumping = false;
        this.usingAbility = false;
    }

    public PlayerData(String playerName, double playerX, double playerY, boolean movingRight, boolean movingLeft, boolean jumping, boolean usingAbility) {
        this.playerName = playerName;
        this.playerX = playerX;
        this.playerY = playerY;
        this.movingRight = movingRight;
        this.movingLeft = movingLeft;
        this.jumping = jumping;
        this.usingAbility = usingAbility;
    }

    public PlayerData(String playerName, double playerX, double playerY) {
        this.playerName = playerName;
        this.playerX = playerX;
        this.playerY = playerY;
        this.movingRight = false;
        this.movingLeft = false;
        this.jumping = false;
        this.usingAbility = false;
    }

    // Getters and Setters
    public String getPlayerName() {
        return playerName;
    }
    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public double getPlayerX() {
        return playerX;
    }
    public void setPlayerX(double playerX) {
        this.playerX = playerX;
    }

    public double getPlayerY() {
        return playerY;
    }
    public void setPlayerY(double playerY) {
        this.playerY = playerY;
    }

    public boolean isMovingRight() {
        return movingRight;
    }
    public void setMovingRight(boolean movingRight) {
        this.movingRight = movingRight;
    }

    public boolean isMovingLeft() {
        return movingLeft;
    }
    public void setMovingLeft(boolean movingLeft) {
        this.movingLeft = movingLeft;
    }

    public boolean isJumping() {
        return jumping;
    }
    public void setJumping(boolean jumping) {
        this.jumping = jumping;
    }

    public boolean isUsingAbility() {
        return usingAbility;
    }
    public void setUsingAbility(boolean usingAbility) {
        this.usingAbility = usingAbility;
    }

    // Métodos adicionales
}
