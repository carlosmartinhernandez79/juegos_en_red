var socket = new SockJS('/ws');
var stompClient = Stomp.over(socket);
var posElfo;
var posGnomo;
var stateGnomo;
var reiniciar = false;
var gameOver = false;
var webSocketOpen = false;

 stompClient.connect({}, onConnect,onError);
 
 function onConnect(){
	 //alert("Te has conectado bien")
	 stompClient.subscribe("/topic/getPosElfo", getPosElfo)//si tras llamar a algo tiene return, ese mensaje irá a onMessageRecived
	 stompClient.subscribe("/topic/getPosGnomo", getPosGnomo)//si tras llamar a algo tiene return, ese mensaje irá a onMessageRecived
	 stompClient.subscribe("/topic/getStateGnomo", getStateGnomo)
	 stompClient.subscribe("/topic/getReiniciarGame", getReiniciarGame)
	  stompClient.subscribe("/topic/getGameOver", getGameOver)
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
 function getPosGnomo(payload){ //SI LO QUE ENVIAMOS TIENE UN RETURN LLEGA AQUÍ Y CON PONER MES.VARAIBLE VALE
	 posGnomo = JSON.parse(payload.body);
 }
 
 function getPosElfo(payload){ //SI LO QUE ENVIAMOS TIENE UN RETURN LLEGA AQUÍ Y CON PONER MES.VARAIBLE VALE
	posElfo = JSON.parse(payload.body);
 }
 function getStateGnomo(payload){ //SI LO QUE ENVIAMOS TIENE UN RETURN LLEGA AQUÍ Y CON PONER MES.VARAIBLE VALE
	stateGnomo = JSON.parse(payload.body);
	System.out.println(stateGnomo)
 }
 
 function getReiniciarGame(payload){
	 reiniciar = JSON.parse(payload.body);
 }
 
 function getGameOver(payload){
	 gameOver = JSON.parse(payload.body);
 }
 