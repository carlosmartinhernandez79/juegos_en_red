class AmbosIguales extends Phaser.Scene{
    constructor() {
        super({ key: 'AmbosIguales' });
    }
    
    init(data){
        if(data){
           	this.username = data.username;
           	this.playerSelected = data.playerSelected
           	this.persoanje = data.persoanje
        }
     }



    create() {
        // Lógica de inicialización de la escena
        if(PlayerChamp1[1] == "gnomo" && PlayerChamp2[1] == "gnomo"){
			this.add.image(0,0, "AmbosIgualesTuk").setOrigin(0,0);
		}
		if (PlayerChamp1[1] == "elfo" && PlayerChamp2[1] == "elfo"){
			this.add.image(0,0, "AmbosIgualesLial").setOrigin(0,0);
		}

		
		var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)

      Volver.setInteractive()
            .on('pointerdown', function () {
                this.scene.start('LogIn',{username: this.username});
                
                //En caso de que quieran cambiarse de personaje, llamo al mismo método de selección de persoanje, 
                //lo hago con this.username, peusto que no sé si lo hará el player1 o el player2
             
            stompClient.send("/game/setUser", 
	 			{},
				JSON.stringify({player:this.username, champ: ""})
	 		)
            }, this);
	}
	
	update(){
		
		/*
		Nos podemos encontrar con 3 casos:
			- Que ambos sean el mismo personaje. No empieza la partida --> mensaje de ambos iguales. LEER ARRIBA
			- Que uno haya elegido y otro no. No empieza la partida --> mensaje de esperando jugadores
			- Que uno sea un elfo y otro un gnomo. En tal caso, empezará la partida, detectando quien es quien para enviarle a su mundo
		
		 */
		
		
		//CASO EN EL QUE UNO DE LOS DOS VAYA CAMBIARSE DE PERSONAJE
		if(PlayerChamp1[1] == "elfo" && PlayerChamp2[1]== "" || PlayerChamp2[1] == "elfo" && PlayerChamp1[1]== "" || 
		PlayerChamp1[1] == "gnomo" && PlayerChamp2[1]== "" || PlayerChamp2[1] == "gnomo" && PlayerChamp1[1]== ""){
			
			
			//Se cambia el P1, P2 se queda con el Elfo y esto lo está leyendo P2
			if(PlayerChamp1[1] == "" && PlayerChamp2[1] == "elfo" && PlayerChamp2[0]==this.username){
				this.scene.start('WaitingForGnomo')
			}
			//Se cambia el P1, P2 se queda con el Gnomo y esto lo está leyendo P2
			if(PlayerChamp1[1] == "" && PlayerChamp2[1] == "gnomo" && PlayerChamp2[0]==this.username){
				this.scene.start('WaitingForElfo')
			}
			
			//Se cambia el P2, P1 se queda con el Elfo y esto lo está leyendo P1
			if(PlayerChamp2[1] == "" && PlayerChamp1[1] == "elfo" && PlayerChamp1[0]==this.username){
				this.scene.start('WaitingForGnomo')
			}
			//Se cambia el P2, P1 se queda con el Gnomo y esto lo está leyendo P1
			if(PlayerChamp2[1] == "" && PlayerChamp1[1] == "gnomo" && PlayerChamp1[0]==this.username){
				this.scene.start('WaitingForElfo')
			}
			
			
			
		}
	}
}
