package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Record {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int levelID;
    private String player1;
    private String player2;
    private int timeInSeconds;
    private int coinsCollected;

    public Record() {
        this.id = 00000L;
        this.levelID = 0;
        this.player1 = "guest1";
        this.player2 = "guest2";
        this.timeInSeconds = 10000;
        this.coinsCollected = 0;
    }

    public Record(Long id, int lvl, String player1, String player2, int timeInSeconds, int coinsCollected) {
        this.id = id;
        this.levelID = lvl;
        this.player1 = player1;
        this.player2 = player2;
        this.timeInSeconds = timeInSeconds;
        this.coinsCollected = coinsCollected;
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
}
