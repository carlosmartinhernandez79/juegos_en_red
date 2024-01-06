var posElfo;
var posGnomo;
var stateGnomo;

var reiniciar = false;
var reiniciarElfo = false;
var reiniciarGnomo = false;

var gameOver = false;
var victoryElfo = false;
var victoryGnomo = false;

var canDoubleJumpServer = false;

var palancaModificada = -1;
var monedaModificada = -1;

var isDirty = false;

var nombreDeUsuario;
var playerSelected = "";
var canChangeUsername = true;


var PlayerChamp1 = [];
var PlayerChamp2 = [];

var webSocketOpen = false; //MANTENER A TRUE CUANDO SE ABRA EL SOCKET O ME CARGO MEDIO JUEGO 
var openSocket = true; //variable para abrirlo una vez solo
var isOpen = false; //para gestionar el tema de la conexión

var socket;
var stompClient;

var amigoDesconectado = false;


for(let i = 0; i<2; i++){
	PlayerChamp1[i]="";
	PlayerChamp2[i]="";
}

var stopTrying = true;

//CHAT
var messages = [];

var myWebSocketInterval = setInterval(webSocketThings, 100);

function webSocketThings(){
	
		$.get("/Usuarios/getServerIp").fail(function(data) {
		
		//alert("SERVIDOR CERRADO")
		//location.reload()
        })
	
	
	if(webSocketOpen){

	//console.log("WEB SOCKET OPEN")

		if(openSocket){
				socket = new SockJS('/ws');
				stompClient = Stomp.over(socket);

 				stompClient.connect({}, onConnect, cerrarSocket);

 				openSocket = false
		}
	 //socket.close(); -->llama a onError
 
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

	 //-------------------CHAT-------------------------
	 stompClient.subscribe('/topic/chatOnline', messageChat);
	  
	 webSocketOpen = true;
	 isOpen = true;
	 //socket.close()//CIERRA EL SOCKET
	 
 }

//CHAT
function messageChat(payload){
	messages = payload;
	displayMessages(messages);
}
		
 //COSAS DE LOS PERSONAJES
 function getPosGnomo(payload){ //recibir la pos del gnomo del servidor
	 posGnomo = JSON.parse(payload.body);
 }
 
  function getDesconectarUsuario(payload){ //recibir la pos del gnomo del servidor
	 amigoDesconectado = JSON.parse(payload.body);
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
	 console.log("Player 1 name: " +  PlayerChamp1[0] + " Player 2 name: " + PlayerChamp2[0])
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

} //end interval


function cerrarSocket(){
	//alert("WESOCKET CLOSED")
	webSocketOpen = false; //MANTENER A TRUE CUANDO SE ABRA EL SOCKET O ME CARGO MEDIO JUEGO 
	openSocket = true; //variable para abrirlo una vez solo
	isOpen = false; //para gestionar el tema de la conexión

	for(let i = 0; i<2; i++){
	PlayerChamp1[i]="";
	PlayerChamp2[i]="";
}

}
