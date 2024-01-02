package com.example.demo;

public class PlayerChamp {

	private String player;
	private String champ;
	
	public PlayerChamp() {
		this.player = "";
		this.champ = "";
	}
	
	public PlayerChamp(String player, String champ) {
		this.player = player;
		this.champ = champ;
	}
	
	public String getPlayer() {
		return this.player;
	}
	public String getChamp() {
		return this.champ;
	}
	
	
	public void setPlayer(String player) {
		this.player = player;
	}
	public void setChamp(String champ) {
		this.champ = champ;
	}
	
}
