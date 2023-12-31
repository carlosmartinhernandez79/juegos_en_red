package com.example.demo;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class gameState {
  
    /*@MessageMapping("/prueba")
    @SendTo("/topic")
    public void prueba() {
        System.out.println("estoy en PRUEBA");
    }
    
    
    @MessageMapping("/prueba2")
    @SendTo("/topic")
    public void prueba2(String s) {
        System.out.println("estoy en PRUEBA: ha llegado la palabra " + s );
    }
    
    @MessageMapping("/prueba3")
    @SendTo("/topic")
    public void prueba3(Message m) {
        System.out.println("estoy en PRUEBA: ha llegado el mensaje " + m.getMessage() + " escrito por " + m.getSender());
    }
    

    @MessageMapping("/prueba4") //para que llegue el mensaje tengo que poner esto
    @SendTo("/topic/recibirPrueba4") //si el mensjae tiene return, se devolverá aquí
    public Message prueba4(@Payload Message m, SimpMessageHeaderAccessor HA) {
    	
        System.out.println("estoy en PRUEBA 4: ha llegado el mensaje " + m.getMessage() + " escrito por " + m.getSender() );
        Object o = HA.getSessionAttributes().put("name",m.getSender());
        System.out.println("Los atributos: " + HA.getSessionAttributes().put("name",m.getSender()));
        System.out.println("Los atributos: " + HA.getSessionAttributes().get("name"));
        
        return m;
    
    }*/
	

    
    private Vex posElfo;
    private Vex posGnomo;
    private int stateGnomo; //0 chikito 1 normal
    private PlayerChamp PlayerChamp1 = new PlayerChamp();
    private PlayerChamp PlayerChamp2 = new PlayerChamp();

    private final SimpMessagingTemplate messagingTemplate;

    @Autowired
    public gameState(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
        posElfo = new Vex(0,0);
        posGnomo = new Vex(0,0);
 
        
    }
    
 
  
    
    //------------------SETTERS Y GETTERS DE LAS POSICIONES DE LOS PERSONAJES---------------------------
    //Basicamente, llega información actualizada y actualiza las posiciones
    @MessageMapping("/setPosElfo")
    @SendTo("/topic/getPosElfo")
    public Vex setPosElfo(@Payload Vex v, SimpMessageHeaderAccessor HA) {
	   posElfo.setX(v.getX());
	   posElfo.setY(v.getY());
	   return v;
    }
    
   
    @MessageMapping("/setPosGnomo")
    @SendTo("/topic/getPosGnomo")
    public Vex setPosGnomo(@Payload Vex v, SimpMessageHeaderAccessor HA) {
    	
    	posGnomo.setX(v.getX());
    	posGnomo.setY(v.getY());
    	return v;
    }
    
    
    @MessageMapping("/setStateGnomo")
    @SendTo("/topic/getStateGnomo")
    public int setStateGnomo(@Payload int i, SimpMessageHeaderAccessor HA) {
    	
    	stateGnomo = i;
    	return i;
    }
    
    @MessageMapping("/setDoubleJump")
    @SendTo("/topic/getDobuleJump")
    public boolean setDoubleJump(@Payload boolean i, SimpMessageHeaderAccessor HA) {
    	return i;
    }
    
    
    
   //------------------------------------------------------------------------------
  //------------------------REINCIAR JUEGO------------------------------------------
    
    @MessageMapping("/reiniciarElfo")
    @SendTo("/topic/getReiniciarElfo")
    public boolean reiniciarElfo(@Payload boolean reiniciar, SimpMessageHeaderAccessor HA) {
    
    	return reiniciar;
    }
    
    
    @MessageMapping("/reiniciarGnomo")
    @SendTo("/topic/getReiniciarGnomo")
    public boolean reiniciarGnomo(@Payload boolean reiniciar, SimpMessageHeaderAccessor HA) {
    
    	return reiniciar;
    }
    
    @MessageMapping("/reiniciarGame")
    @SendTo("/topic/getReiniciarGame")
    public boolean reiniciarGame(@Payload boolean reiniciar, SimpMessageHeaderAccessor HA) {
    
    	return reiniciar;
    }
    
  //------------------------------------------------------------------------------
  //------------------------CASO DE DERROTA------------------------------------------
    @MessageMapping("/gameOver")
    @SendTo("/topic/getGameOver")
    public boolean gameOver(@Payload boolean gameOver, SimpMessageHeaderAccessor HA) {
    
    	return gameOver;
    }
    
  //------------------------------------------------------------------------------ 
  //------------------------CASO DE VICTORIA------------------------------------------
    @MessageMapping("/victoryElfo")
    @SendTo("/topic/getVictoryElfo")
    public boolean victoryElfo(@Payload boolean v, SimpMessageHeaderAccessor HA) {
    
    	return v;
    }
    
    @MessageMapping("/victoryGnomo")
    @SendTo("/topic/getVictoryGnomo")
    public boolean  victoryGnomo(@Payload boolean v, SimpMessageHeaderAccessor HA) {
    
    	return v;
    }
    
    //------------------------------------------------------------------------------
    //------------------------SELECCIÓN DE PERSONAJE/CAMBIAR DE PERSONAJE------------------------------------------
    @MessageMapping("/setUser")
    @SendTo("/topic/getUser")
    public PlayerChamp setUser(@Payload PlayerChamp PC, SimpMessageHeaderAccessor HA) {
    	
    	if(PlayerChamp1.getPlayer().equals("")) { //el primero que se conecte al socket será player 1
    		PlayerChamp1 = new PlayerChamp(PC.getPlayer(), PC.getChamp());
    		
    		System.out.println("FIRST TIME CHOSING PLAYER 1");
    	}
    	else if(!PlayerChamp1.getPlayer().equals(PC.getPlayer()) && PlayerChamp2.getPlayer().equals("")){ //el otro será player 2
    		PlayerChamp2 = new PlayerChamp(PC.getPlayer(), PC.getChamp());
    		System.out.println("FIRST TIME CHOSING PLAYER 2");
    	}
    	
    	else if(PlayerChamp1.getPlayer().equals(PC.getPlayer())) { //si esto es así, es porque p1 quiere cambiarse de personaje
    		PlayerChamp1.setChamp(PC.getChamp());
    		System.out.println("switching name player 1");
    	}
    	
    	else if(PlayerChamp2.getPlayer().equals(PC.getPlayer())) { //si esto es así, es porque p2 quiere cambiarse de personaje
    		PlayerChamp2.setChamp(PC.getChamp());
    		System.out.println("switching name player 2");
    	}
    	
    	return PC;
    	
    }
    
  //------------------------------------------------------------------------------
    //------------------------GESTOR DE PALANCAS------------------------------------------
   
    @MessageMapping("/actualizarPalancas")
    @SendTo("/topic/getPalancas")
    //o que reciba el int donde se encuentra el cambio y que luego se acceda a ese int para cambiarlo
    
    public int actualizarPalancas(@Payload int palancaModificada, SimpMessageHeaderAccessor HA) {

    	return palancaModificada;
    }
    
    //------------------------------------------------------------------------------
    //------------------------GESTOR DE MONEDAS------------------------------------------
   
    @MessageMapping("/actualizarMonedas")
    @SendTo("/topic/getMonedas")
    //o que reciba el int donde se encuentra el cambio y que luego se acceda a ese int para cambiarlo
    
    public int actualizarMonedas(@Payload int monedaModificada, SimpMessageHeaderAccessor HA) {

    	return monedaModificada;
    }
    
  //------------------------------------------------------------------------------
    //------------------------GESTOR DESCONEXIÓN------------------------------------------
   
    @MessageMapping("/desconectarUsuario")
    @SendTo("/topic/getDesconectarUsuario")
    //o que reciba el int donde se encuentra el cambio y que luego se acceda a ese int para cambiarlo
    
    public boolean desconectarUsuario(@Payload boolean desc, SimpMessageHeaderAccessor HA) {

    	return desc;
    }
    
}
