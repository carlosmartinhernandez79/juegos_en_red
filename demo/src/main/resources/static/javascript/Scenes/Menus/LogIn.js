class LogIn extends Phaser.Scene{
    constructor() {
        super({ key: 'LogIn' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }
    
     init(data){
        if(data){
           	this.username = data.username;
        }
    }
    
    

    create() {
        // Lógica de inicialización de la escena
        this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);

        this.add.image(600,70, "InterfazPersonajes").setOrigin(0.5,0.5);

        this.gnomo = this.add.image(300, 350, "BotonTuk").setScale(0.65);

        this.elfo=this.add.image(900, 350, "BotonLial").setScale(0.65);

        var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)
        
		this.playerSelected;
		
        Volver.setInteractive()
            .on('pointerdown', function () {
                this.scene.start('ModoDeJuego',{username:this.username});
            }, this);
            
        this.gnomo.setInteractive()
            .on('pointerdown', function () {
				
			/*Cuando selecciono un personaje, asocio en el servidor usuario y personaje
			 y cambio de pantalla a waiting for players que es un lobby
			 */
			this.playerSelected = "gnomo"
            this.scene.start('WaitingForElfo',{username: this.username, playerSelected:  this.playerSelected});
                
            stompClient.send("/game/setUser", 
	 			{},
				 JSON.stringify({player:this.username, champ: "gnomo"})
	 		)
                
                
            }, this);
            
		this.elfo.setInteractive()
            .on('pointerdown', function () {
				
			this.playerSelected = "elfo"	
           	this.scene.start('WaitingForGnomo',{username: this.username, playerSelected:  this.playerSelected});
                
                
            stompClient.send("/game/setUser", //ACTUALIZO LA POS DE LOS PERSONAJES CONSNTANTEMENTE, HAYA CAMBIO O NO
	 			{},
				JSON.stringify({player:this.username, champ: "elfo"})
	 		)
                
            }, this);

        this.data.set('NamePlayer1', "Player1");
        this.data.set('NamePlayer2', "Player2");

    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
    
    getPlayerSelected(){
		return this.playerSelected;
	}
}

//export default Escena2;
