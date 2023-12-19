class GameOver extends Phaser.Scene{
    constructor() {
        super({ key: 'GameOver' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
        console.log("MUERTOS")
    }

    create() {
        this.scene.bringToTop();
        const graphics = this.add.graphics();
        this.scene.get("TutorialLevel").MiMusicaBase.pause();
        this.scene.get("TutorialLevel").MusicaHasPerdido.play();

        this.add.image(0,0, "PantallaDerrota").setOrigin(0,0);


        graphics.fillStyle(0x000000, 1);
        graphics.fillRect(0, 0, 1200, 600);

        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

this.myIPDerrota= ""
    }

    update() {
        if(this.space.isDown){
            this.scene.stop();
            var sceneMain = this.scene.start("TutorialLevel");
            this.scene.get("TutorialLevel").MiMusicaBase.pause();
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