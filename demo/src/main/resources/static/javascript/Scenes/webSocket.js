var posElfo;
var posGnomo;
var stateGnomo;

var reiniciar = false;
var reiniciarElfo = false;
var reiniciarGnomo = false;

var gameOver = false;
var webSocketOpen = false; //MANTENER A TRUE CUANDO SE ABRA EL SOCKET O ME CARGO MEDIO JUEGO 
var victoryElfo = false;
var victoryGnomo = false;

var canDoubleJumpServer = false;

var palancaModificada = -1;
var monedaModificada = -1;

var isDirty = false;


var PlayerChamp1 = [];
var PlayerChamp2 = [];

var openSocket = true;

var socket;
var stompClient;

var connexionLost = false;

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

setInterval(webSocketThings, 100);

function webSocketThings(){
	
console.log("WEB SOCKET CLOSE")
	
if(webSocketOpen){

console.log("WEB SOCKET OPEN")

if(openSocket){
	socket = new SockJS('/ws');
	stompClient = Stomp.over(socket);

 stompClient.connect({}, onConnect,onError);
 openSocket = false
}

 

 
 function onConnect(){
	 //alert("Te has conectado bien")
	 
	 //-------------------COSAS DEL ELFO Y DEL GNOMO----------------------------------
	 stompClient.subscribe("/topic/getPosElfo", getPosElfo)//Lo que llegue del servidor de este método irá a getPosElfo
	 stompClient.subscribe("/topic/getPosGnomo", getPosGnomo)//Lo que llegue del servidor de este método irá a getPosGnomo
	 stompClient.subscribe("/topic/getStateGnomo", getStateGnomo)//Lo que llegue del servidor de este método irá a getStateGnomo
	 stompClient.subscribe("/topic/getDobuleJump", getDobuleJump)
	  //-------------------CONDICIONES DE VICTORIA DERROTA Y RESET----------------------------------
	 stompClient.subscribe("/topic/getReiniciarGnomo", getReiniciarGnomo)
	 stompClient.subscribe("/topic/getReiniciarElfo", getReiniciarElfo)
	  stompClient.subscribe("/topic/getReiniciarGame", getReiniciarGame)
	 
	 stompClient.subscribe("/topic/getGameOver", getGameOver)
	 stompClient.subscribe("/topic/getVictoryElfo", getVictoryElfo)
	 stompClient.subscribe("/topic/getVictoryGnomo", getVictoryGnomo)
	
	
	 //-------------------TEMA GESTION USUARIOS/CHAMPIONS----------------------------------
	 stompClient.subscribe("/topic/getUser", getUser)
	 
	  //-------------------PALANCAS----------------------------------
	  stompClient.subscribe("/topic/getPalancas", getPalancas)
	  
	  //-------------------PALANCAS----------------------------------
	  stompClient.subscribe("/topic/getMonedas", getMonedas)
	  
	  //--------------USUARIO DESCONECTADO---------------------------------
	  stompClient.subscribe("/topic/getDesconectarUsuario", getDesconectarUsuario)
	  
	 webSocketOpen = true;
	 
 }
 
 function onError(){
	 //alert("ERROR") //PONER LO DE QUE SE HA PERDIDO LA CONEXIÓN CON EL SERVIDOR Y QUE TE DEVUELVA AL MAIN
	 connexionLost = true;
 }
 //COSAS DE LOS PERSONAJES
 function getPosGnomo(payload){ //recibir la pos del gnomo del servidor
	 posGnomo = JSON.parse(payload.body);
 }
 
  function getDesconectarUsuario(payload){ //recibir la pos del gnomo del servidor
	 connexionLost = JSON.parse(payload.body);
 }
 
 function getPosElfo(payload){ //recibir la pos del elfo del servidor
	posElfo = JSON.parse(payload.body);
 }
 function getStateGnomo(payload){ //recibir el estado del gnomo del servidor (pequeño o grande)
	stateGnomo = JSON.parse(payload.body);
 }
 
 function getDobuleJump(payload){
	 canDoubleJumpServer = JSON.parse(payload.body);
 }
 //-------------------------------------------------------------
 function getReiniciarGnomo(payload){    //si se quiere reinciiar el juego o no del servidor
	 reiniciarGnomo = JSON.parse(payload.body);
 }
 
  function getReiniciarElfo(payload){    //si se quiere reinciiar el juego o no del servidor
	 reiniciarElfo = JSON.parse(payload.body);
 }
 
  function getReiniciarGame(payload){    //si se quiere reinciiar el juego o no del servidor
	 reiniciar = JSON.parse(payload.body);
 }
 //----------------------------------------------
 function getGameOver(payload){         //si se a perdido el juego o no del servidor
	 gameOver = JSON.parse(payload.body);
 }
 
 function getVictoryGnomo(payload){				//si se ha ganado
	  victoryGnomo = JSON.parse(payload.body);
 }
 
  function getVictoryElfo(payload){				//si se ha ganado
	  victoryElfo = JSON.parse(payload.body);
 }
 
 function getUser(payload){  			//cambiar personaje/primera vez que se elige personaje
	 let array = JSON.parse(payload.body);
	
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
 //---------------------PALANCAS---------------------------------	 
	 function getPalancas(payload){				
	  palancaModificada = JSON.parse(payload.body);
	  isDirty = true;
	  }
//---------------------MONEDAS---------------------------------	 	  
	  function getMonedas(payload){
		   monedaModificada = JSON.parse(payload.body);
		   isDirty = true;
	  }
	  
} 
 
 
}
