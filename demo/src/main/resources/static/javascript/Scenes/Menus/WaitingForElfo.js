class WaitingForElfo extends Phaser.Scene{
    constructor() {
        super({ key: 'WaitingForElfo' });
    }
    
    init(data){
        if(data){
           	this.username = data.username;
           	this.playerSelected = data.playerSelected
        }
     }



    create() {
        // Lógica de inicialización de la escena
        this.add.image(0,0, "EsperandoLial").setOrigin(0,0);
			
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

		if(PlayerChamp1[1] == "elfo" && PlayerChamp2[1]== "gnomo" || PlayerChamp2[1] == "elfo" && PlayerChamp1[1]== "gnomo"){
			
			
			console.log("AMBOS READY TO GOOO")
			
			console.log("Player1 " + PlayerChamp1[0] + " playing as " + PlayerChamp1[1])
			console.log("Player2 " + PlayerChamp2[0] + " playing as " + PlayerChamp2[1])
			
			
			if(	this.playerSelected == "elfo"){
				this.scene.start('TutorialLevelOnlineElfo')
			}
			if(	this.playerSelected == "gnomo" ){
				this.scene.start('TutorialLevelOnlineGnomo')
			}
			
			
			
		}
		else if(PlayerChamp1[1] == PlayerChamp2[1]){
			
			this.scene.start('AmbosIguales',{username: this.username, playerSelected:  this.playerSelected, personaje:PlayerChamp1[0]});
			
		}
		else{
			console.log("ESPERANDO JUGADORES...")
		}
	}
}
