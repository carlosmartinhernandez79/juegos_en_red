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

        this.add.image(600,70, "PersonajesText").setOrigin(0.5,0.5);

        this.gnomo = this.add.image(300, 300, "GnomoPng").setScale(0.1);

        this.elfo=this.add.image(700, 300, "ElfaPng").setScale(0.15);

        var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)
        
		this.playerSelected;
		
        Volver.setInteractive()
            .on('pointerdown', function () {
                this.scene.start('StartScreen');
            }, this);
            
        this.gnomo.setInteractive()
            .on('pointerdown', function () {
				
			/*Cuando selecciono un personaje, asocio en el servidor usuario y personaje
			 y cambio de pantalla a waiting for players que es un lobby
			 */
				
			this.playerSelected = "gnomo"
            this.scene.start('waitingForPlayer',{username: this.username, playerSelected:  this.playerSelected});
                
            stompClient.send("/game/setUser", //ACTUALIZO LA POS DE LOS PERSONAJES CONSNTANTEMENTE, HAYA CAMBIO O NO
	 			{},
				 JSON.stringify({player:this.username, champ: "gnomo"})
	 		)
                
                
            }, this);
            
		this.elfo.setInteractive()
            .on('pointerdown', function () {
				
			this.playerSelected = "elfo"
				
           	this.scene.start('waitingForPlayer',{username: this.username, playerSelected:  this.playerSelected});
                

                
            stompClient.send("/game/setUser", //ACTUALIZO LA POS DE LOS PERSONAJES CONSNTANTEMENTE, HAYA CAMBIO O NO
	 			{},
				JSON.stringify({player:this.username, champ: "elfo"})
	 		)
                
            }, this);

        this.data.set('NamePlayer1', "Player1");
        this.data.set('NamePlayer2', "Player2");


        this.NivelesOff = this.add.image(600, 525,"BotonNivelesOff").setScale(0.75);
        this.NivelesOn = this.add.image(600, 525,"BotonNivelesOn").setScale(0.85);
        this.BotonNiveles = this.NivelesOff
        this.NivelesOn.setVisible(false);
        this.BotonNiveles.setInteractive()
        
        this.BotonNiveles.on('pointerover',()=>{
            this.NivelesOn.setVisible(true);
        })
        
        this.BotonNiveles.on('pointerout',()=>{
            this.NivelesOff.setVisible(true);
            this.NivelesOn.setVisible(false);
        })
        
        this.BotonNiveles.on('pointerdown', function () {
            this.scene.start("LevelSelector")
        }, this);
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
    
    getPlayerSelected(){
		return this.playerSelected;
	}
}

//export default Escena2;
