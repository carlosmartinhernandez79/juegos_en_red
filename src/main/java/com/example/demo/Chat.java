package com.example.demo;


public class Chat {

	private String player;
    private String messageLine;
    
    Chat(String a, String b){
    	this.player = a;
    	this.messageLine = b;
    }
    
    public String myPlayer() {
    	return this.player;
    }
    
    public String myLine() {
    	return this.messageLine;
    }
    
    public void newPlayer(String a) {
    	this.player = a;
    }
    
    public void newLine(String a) {
    	this.messageLine  = a;
    }

}

/*private String chatBlock[] = new String[100];
private int contador = 0;

public Chat(){
	for(int i = 0; i < chatBlock.length; i++) {
		chatBlock[i] = null;
	}
}

public void registerLine(String a){
	
	if(contador >= chatBlock.length) {
		for(int i = 0; i<chatBlock.length - 3; i++) {
			chatBlock[i] = null;
		}
		contador = contador - 3;
		for(int j = 0; j >3; j++) {
			chatBlock[j] = chatBlock[contador];
			chatBlock[contador] = null;
			contador++;
		}
		
		contador = 3;
	}
	
	this.chatBlock[contador] = a;
	contador++;
}

public String[] getChat() {
	
	return chatBlock;
	
}

public void emptyChat() {
	for(int i = 0; i < chatBlock.length; i++) {
		chatBlock[i] = null;
	}
}*/