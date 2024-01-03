class GameOver extends Phaser.Scene{
    constructor() {
        super({ key: 'GameOver' });
    }
    
    
    init(data){
        if(data){
            this.pantalla = data.pantalla;
        }
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
        console.log("MUERTOS")
    }

    create() {
        this.scene.bringToTop();
        const graphics = this.add.graphics();
        this.scene.get(this.pantalla).MiMusicaBase.pause();
        this.scene.get(this.pantalla).MusicaHasPerdido.play();

        this.add.image(0,0, "PantallaDerrota").setOrigin(0,0);


        graphics.fillStyle(0x000000, 1);
        graphics.fillRect(0, 0, 1200, 600);

        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

this.myIPDerrota= ""
    }

    update() {
        if(this.space.isDown){
            this.scene.stop();
           
			var sceneMain = this.scene.start(this.pantalla); //comienzo de nuevo esta pantalla
			
			if(webSocketOpen){ //si el websocket its open, haz esto
			stompClient.send("/game/reiniciarGame",  //envia un mensaje al servidor de que han reiniciado
	 			{},
				true
	 		)
	 		}
			
            this.scene.get(this.pantalla).MiMusicaBase.pause();
        }
        
        
        if(reiniciar){ //como quiero que se reinicien a la vez
        
        /*Esto es complejo, muere el elfo, y aquí llegan el elfo y el gnomo. 
        Aqui llegará el elfo o el gnomo, dependiendo de quien le haya dado antes al espacio. En caso de darle el gnomo, 
        se reinicia arriba, manda una señal de reinciair al servidor e instantaneamente, se reinicia el elfo
         */
			if(this.pantalla == "TutorialLevelOnlineGnomo")  
				this.scene.start("TutorialLevelOnlineGnomo");
			else{
				this.scene.start("TutorialLevelOnlineElfo"); 
			}
				reiniciar = false;
			}
        
          if (!this.dataSended) {
            this.sendData(); // Llamar al método que envía los datos
         }
    }
    
        setIPDerrota(ip){
		this.myIPDerrota = ip;
	}
    
     sendData() {

        // Crear un objeto con los datos del registro

        var recordData = {
            levelID: 1,
            player1: user,
            player2: user,
            timeInSeconds: this.scene.get("Tiempo_Monedas").getTimeInSeconds(),
            coinsCollected: this.scene.get("Tiempo_Monedas").getMonedas(),
            victoria:false
        };

        // Realizar la solicitud POST
        $.ajax({
            url:  this.myIPDerrota +"api/records",
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(recordData),
            success: function (data) {
                console.log('Nuevo registro creado:', data);
            },
            error: function (error) {
                console.error('Error al crear un nuevo registro:', error.responseText);
            }
        });

        this.dataSended = true; // Marcar que los datos se han enviado
    }
}