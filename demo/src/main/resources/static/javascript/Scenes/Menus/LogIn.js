class LogIn extends Phaser.Scene{
    constructor() {
        super({ key: 'LogIn' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí

    }

    create() {
        // Lógica de inicialización de la escena

        
        this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);

        this.add.image(600,70, "InterfazPersonajes").setOrigin(0.5,0.5);

        this.gnomo = this.add.image(300, 350, "BotonTuk").setScale(0.65);

        this.elfo=this.add.image(900, 350, "BotonLial").setScale(0.65);

        var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)  
        
        document.getElementById("chat-container").style.display = "block";
		
        Volver.setInteractive()
            .on('pointerdown', function () {
                this.scene.start('ModoDeJuego');
            }, this);
            
        this.gnomo.setInteractive()
            .on('pointerdown', function () {
				
			/*Cuando selecciono un personaje, asocio en el servidor usuario y personaje
			 y cambio de pantalla a waiting for players que es un lobby
			 */
			playerSelected = "gnomo"
            this.scene.start('WaitingForElfo');
                
            stompClient.send("/game/setUser", 
	 			{},
				 JSON.stringify({player:nombreDeUsuario, champ: "gnomo"})
	 		)
                
                
            }, this);
            
		this.elfo.setInteractive()
            .on('pointerdown', function () {
				
			playerSelected = "elfo"	
           	this.scene.start('WaitingForGnomo');
                
                
            stompClient.send("/game/setUser", //ACTUALIZO LA POS DE LOS PERSONAJES CONSNTANTEMENTE, HAYA CAMBIO O NO
	 			{},
				JSON.stringify({player:nombreDeUsuario, champ: "elfo"})
	 		)
                
            }, this);

        this.data.set('NamePlayer1', "Player1");
        this.data.set('NamePlayer2', "Player2");

    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}

//export default Escena2;
