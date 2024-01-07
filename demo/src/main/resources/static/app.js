
 var socket = new SockJS('/ws');
 var stompClient = Stomp.over(socket);
 
 stompClient.connect({}, onConnect,onError);
 
 function onConnect(){
	 alert("Te has conectado bien")
	 stompClient.subscribe("/topic", onMessageRecived)
	 stompClient.subscribe("/topic/prueba4", onPrueba4)
	 
	 stompClient.send("/app/prueba") //llamar a un metodo normal
	 stompClient.send("/app/prueba2", //llamar a un método con parámetros (es una string basic)
	 {},
	 "HOLA COÑITOS"
	 )
	 
	 stompClient.send("/app/prueba3", //llamar a un método con parámetros (es una string basic)
	 {},
	 JSON.stringify({name:"Hugo", message: "ESTOY CONTENTO COMO FUNCIONE"})
	 )
	 
	 
	 stompClient.send("/app/prueba4", //llamar a un método con parámetros (es una string basic)
	 {},
	 JSON.stringify({name:"Alvaro", message: "A ver como va esto"})
	 )
	 
	 
 }
 
 function onError(){
	 alert("ERROR")
 }
 
 function onMessageRecived(){
	 alert("MENSAJITOS")
 }
 
 function onPrueba4(payload){
	 var mes = JSON.parse(payload.body)
	 console.log(mes.name+ " ME la come")
 }