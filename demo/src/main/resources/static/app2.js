
	 setTimeout(()=>{
		 
		  stompClient.send("/app/prueba4", //llamar a un método con parámetros (es una string basic)
	 {},
	 JSON.stringify({name:"MARCOS", message: "Mensaje desde app2"})
	 )
		 
	 },1000)
	 
	
	 
