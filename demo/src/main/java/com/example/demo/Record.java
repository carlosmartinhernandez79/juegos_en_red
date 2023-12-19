package com.example.demo;

public class Record {

    private Long id;
    private int levelID;
    private String player1;
    private String player2;
    private int timeInSeconds;
    private int coinsCollected;
    private int puntuation;
    private boolean victoria;

    public Record() {
        this.id = 00000L;
        this.levelID = 0;
        this.player1 = "guest1";
        this.player2 = "guest2";
        this.timeInSeconds = 10000;
        this.coinsCollected = 0;
        this.puntuation = 0;
    }

    public Record(Long id, int lvl, String player1, String player2, int timeInSeconds, int coinsCollected, boolean victoria) {
        this.id = id;
        this.levelID = lvl;
        this.player1 = player1;
        this.player2 = player2;
        this.timeInSeconds = timeInSeconds;
        this.coinsCollected = coinsCollected;
        this.puntuation = (timeInSeconds)+(coinsCollected*3);
        this.victoria = victoria;
    }

    // GETTERS
    public Long getId() {
        return id;
    }
    public int getLevelID() {
        return levelID;
    }

    public String getPlayer1() {
        return player1;
    }

    public String getPlayer2() {
        return player2;
    }

    public int getTimeInSeconds() {
        return timeInSeconds;
    }

    public int getCoinsCollected() {
        return coinsCollected;
    }
    public int getPuntuation() {
        return puntuation;
    }
    public boolean getVictoria(){
        return victoria;
    }

    // SETTERS
    public void setId(Long id) {
        this.id = id;
    }
    public void setLevelID(int levelID) {
        this.levelID = levelID;
    }

    public void setPlayer1(String player1) {
        this.player1 = player1;
    }

    public void setPlayer2(String player2) {
        this.player2 = player2;
    }

    public void setTimeInSeconds(int timeInSeconds) {
        this.timeInSeconds = timeInSeconds;
    }

    public void setCoinsCollected(int coinsCollected) {
        this.coinsCollected = coinsCollected;
    }
    public void setPuntuation(int puntuation) {
        this.puntuation = puntuation;
    }
    public void setVictoria(boolean victoria) {
        this.victoria = victoria;
    }

    // Metodos adicionales
    public void calculatePuntuation() {
        this.puntuation = (timeInSeconds*2)+(coinsCollected*15);
    }
    public void calculatePuntuationDefeat() {
        this.puntuation = (timeInSeconds/2)+(coinsCollected);
    }

}
