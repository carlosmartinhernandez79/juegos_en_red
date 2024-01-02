var posElfo;
var posGnomo;
var stateGnomo;
var reiniciar = false;
var gameOver = false;
var webSocketOpen = false;
var gnomoReady = false;
var elfoReady = false;
var victoryPoints = 0;


var PlayerChamp1 = [];
var PlayerChamp2 = [];

for(let i = 0; i<2; i++){
	PlayerChamp1[i]="";
	PlayerChamp2[i]="";
}


$(document).ready(function() {
    // Realiza una solicitud al servidor para obtener la IP
    $.get("/Usuarios/getServerIp", function(ip) {
		//alert("La IP: " + ip)
       // openSocket(ip);
    });
});


var socket = new SockJS('/ws');
var stompClient = Stomp.over(socket);

 stompClient.connect({}, onConnect,onError);
 

 
 function onConnect(){
	 //alert("Te has conectado bien")
	 stompClient.subscribe("/topic/getPosElfo", getPosElfo)//si tras llamar a algo tiene return, ese mensaje irá a onMessageRecived
	 stompClient.subscribe("/topic/getPosGnomo", getPosGnomo)//si tras llamar a algo tiene return, ese mensaje irá a onMessageRecived
	 stompClient.subscribe("/topic/getStateGnomo", getStateGnomo)
	 stompClient.subscribe("/topic/getReiniciarGame", getReiniciarGame)
	 stompClient.subscribe("/topic/getGameOver", getGameOver)
	 stompClient.subscribe("/topic/getVictory", getVictory)
	 
	 
	 stompClient.subscribe("/topic/getUser", getUser)
	 
	 webSocketOpen = true;
	 
	 //--------------IMPORTANTE ESE COMENTARIO DE ARRIBA------------------
	 /*
	 - Esto me permite enviar info a un sitio en específico: 
	     Si hay movimiento, envío a x URL la posición del personaje.
	 - SI hay cambios en el servidor, puedo devolverlos a una URL en específico de MI JUEGO.
	  */
	 	    
	 
	 //-------WAY TO SEND THINGS THROUGHT SOCKETS------------------
	/* stompClient.send("/app/prueba") //llamar a un metodo normal
	 stompClient.send("/app/prueba2", //llamar a un método con parámetros (es una string basic)
	 {},
	 "HOLA COÑITOS"
	 )
	 
	 stompClient.send("/app/prueba3", //llamar a un método con parámetros (es una string basic)
	 {},
	 JSON.stringify({sender:"Hugo", content: "ESTOY CONTENTO COMO FUNCIONE"})
	 )
	 
	 
	 stompClient.send("/app/prueba4", //llamar a un método con parámetros (es una string basic)
	 {},
	 JSON.stringify({sender:"Alvaro", content: "A ver como va esto"})
	 )*/
	 setInterval(() => {
  				 	stompClient.send("/game/getPosElfo")
				}, 200);
	 
 }
 
 	 	stompClient.send("/game/getPosElfo")
 
 function onError(){
	 alert("ERROR")
 }
 function getPosGnomo(payload){ //recibir la pos del gnomo del servidor
	 posGnomo = JSON.parse(payload.body);
 }
 
 function getPosElfo(payload){ //recibir la pos del elfo del servidor
	posElfo = JSON.parse(payload.body);
 }
 function getStateGnomo(payload){ //recibir el estado del gnomo del servidor (pequeño o grande)
	stateGnomo = JSON.parse(payload.body);
	System.out.println(stateGnomo)
 }
 
 function getReiniciarGame(payload){    //si se quiere reinciiar el juego o no del servidor
	 reiniciar = JSON.parse(payload.body);
 }
 
 function getGameOver(payload){         //si se a perdido el juego o no del servidor
	 gameOver = JSON.parse(payload.body);
 }
 
 function getVictory(payload){				//si se ha ganado
	  victoryPoints += JSON.parse(payload.body);
 }
 
 function getUser(payload){  			//cambiar personaje/primera vez que se elige personaje
	 let array = JSON.parse(payload.body);
	 alert(array.player + ", " + array.champ)
	
	 if(PlayerChamp1[0] == ""){ //si player 1 está vacio, lo relleno. Si el nombre que me llega es igual al que habia en P1 --> es que quiero cambiar el champ
		 PlayerChamp1[0]= array.player
 		 PlayerChamp1[1]= array.champ;
 		 
	 }
	 else if(PlayerChamp2[0] == ""  && array.player != PlayerChamp1[0]){ //si player2 está vacio y lo que llega es distinto de player 1
		
		 PlayerChamp2[0]= array.player
 		 PlayerChamp2[1]= array.champ
	 }
	 else if(array.player == PlayerChamp1[0]){
		 
		 PlayerChamp1[0]= array.player
 		 PlayerChamp1[1]= array.champ;
	 }
	 else if(array.player == PlayerChamp2[0]){
		  PlayerChamp2[0]= array.player
 		 PlayerChamp2[1]= array.champ;
	 }
 }
 