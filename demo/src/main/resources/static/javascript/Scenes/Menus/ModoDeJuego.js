class ModoDeJuego extends Phaser.Scene{
    constructor() {
        super({ key: 'ModoDeJuego' });
    }

    preload() {
          //TEXTOS WEBSOCKET
          //this.load.image("FriendLeaves", "./ImagesJS/WebSocketThings/texto_companero_abandonado.png");
           this.load.image("EsperandoJugador", "./ImagesJS/WebSocketThings/texto_esperando_jugador.png");
           this.load.image("JugadorUnido", "./ImagesJS/WebSocketThings/texto_jugador_unido.png");
             //this.load.image("AmbosIgualesLial", "./ImagesJS/WebSocketThings/Pantalla_Ambos_Iguales_Lial.png");
    }
    

    create() {
        // Lógica de inicialización de la escena
        
                 this.FriendLeave =this.add.image(550,300, "FriendLeaves").setOrigin(0.5,0.5)
        this.add.image(0,0, "PantallaModo").setOrigin(0,0);

 		this.LocalOff= this.add.image(345,480, "BotonLocalOff").setOrigin(0.5,0.5).setScale(0.75);
        this.LocalOn =this.add.image(345,480, "BotonLocalOn").setOrigin(0.5,0.5).setScale(0.85);
       

		 this.OnlineOff = this.add.image(855,480, "BotonOnlineOff").setOrigin(0.5,0.5).setScale(0.75);
        this.OnlineOn = this.add.image(855,480, "BotonOnlineOn").setOrigin(0.5,0.5).setScale(0.85);
        
        
         this.esperandoJugador = this.add.image(1050,50, "EsperandoJugador").setOrigin(0.5,0.5).setScale(0.5).setVisible(false);
         this.jugadorUnido = this.add.image(1050,50, "JugadorUnido").setOrigin(0.5,0.5).setScale(0.5).setVisible(false);
          this.abriendoSocket = this.add.image(1050,50, "AbriendoSocket").setOrigin(0.5,0.5).setScale(0.5).setVisible(false);
           this.socketAbierto = this.add.image(1050,50, "SocketAbierto").setOrigin(0.5,0.5).setScale(0.5).setVisible(false);
       
       	this.conexionEstablecida = false;
       	this.onlyOnce = true;
       
       this.interval = setInterval(() => {
  			if(isOpen){//CUANDO EL SERVIDOR HA ACABADO DE ABRIRSE
				stompClient.send("/game/setUser", //ACTUALIZO LA POS DE LOS PERSONAJES CONSNTANTEMENTE, HAYA CAMBIO O NO
	 				{},
					JSON.stringify({player:nombreDeUsuario, champ: ""})//solo detecto el usuario //cambiar username a this.username si no works
	 			)
	 		}
		}, 4000);

	 		

        var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)
       
		
        Volver.setInteractive()
            .on('pointerdown', function () {
                this.scene.start('StartScreen');
                clearInterval(this.interval);
                
            }, this);
            

        this.BotonLocal = this.LocalOff
        this.LocalOn.setVisible(false);
        this.BotonLocal.setInteractive()
        
        this.BotonLocal.on('pointerover',()=>{
            this.LocalOn.setVisible(true);
            //this.LocalOff.setVisible(false);
        })
        
        this.BotonLocal.on('pointerout',()=>{
            this.LocalOff.setVisible(true);
            this.LocalOn.setVisible(false);
        })
        
        this.BotonLocal.on('pointerdown', function () {
            this.scene.start("LevelSelector")
        }, this);
        
        
        
        this.BotonOnline= this.OnlineOff
        this.OnlineOn.setVisible(false);
        this.BotonOnline.setInteractive()
        
        this.BotonOnline.on('pointerover',()=>{
            this.OnlineOn.setVisible(true);
             //this.OnlineOff.setVisible(false);
        })
        
        this.BotonOnline.on('pointerout',()=>{
            this.OnlineOff.setVisible(true);
            this.OnlineOn.setVisible(false);
        })
        
        this.BotonOnline.on('pointerdown', function () {
			
			webSocketOpen = true;
			
			if(!this.conexionEstablecida && this.onlyOnce){//no nos hemos conectado aun y no lo hemos dicho
				 this.abriendoSocket.setVisible(true);
				 console.log("ESTABLECIENDO CONEXIÓN...")
				 this.conexionEstablecida = true;
			 }
			 //socket.close();
        }, this);
    }
    
   update(){
	   console.log(this.conexionEstablecida + " " + this.onlyOnce + " " + isOpen)
	   //SOCKET ABIERTO --> BUSCANDO JUGADORES
	   if(this.conexionEstablecida 	&& this.onlyOnce && isOpen){
				
				 this.abriendoSocket.setVisible(false);
				 
				 this.socketAbierto.setVisible(true);
				 
				 setTimeout(() => {
 						this.socketAbierto.setVisible(false);
 						this.esperandoJugador.setVisible(true)
				}, 1000);
				
				 console.log("CONEXIÓN ESTABLECIDA")
				 this.conexionEstablecida = true;
				 this.onlyOnce = false;
		}
		
		//AMBOS JUGADORES UNIDOS --> SELECCIÓN DE PERSONAJE	
		if(PlayerChamp1[0]!="" && PlayerChamp2[0]!="" && webSocketOpen){//solo hay un jugador y siempre el primero estará en el 1
			
			 this.jugadorUnido.setVisible(true)
			 this.esperandoJugador.setVisible(false);
			 
			 
				setTimeout(() => {
					console.log("AMBOS JUGADORES UNIDOS")
  				 	 this.jugadorUnido.setVisible(false);
  				 	 this.scene.start("LogIn")
  				 	 this.scene.stop("ModoDeJuego")
  				 	 clearInterval(this.interval);
				}, 1000);
				
			}
   } 
    
       
}


//export default Escena2;
