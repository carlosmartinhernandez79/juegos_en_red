class Victory extends Phaser.Scene{
    constructor() {
        super({ key: 'Victory' });
    }

    preload() {

    }

    create() {
        this.scene.bringToTop();
        const graphics = this.add.graphics();
        this.scene.get("TutorialLevel").MiMusicaBase.pause();

        this.add.image(0,0, "PantallaVictoria").setOrigin(0,0);
        
        this.add.text(850, 340, this.scene.get("Tiempo_Monedas").getTime(), {font: "30px Arial", fill: "white"})

        this.add.text(520, 340, this.scene.get("Tiempo_Monedas").getMonedas()+ "/3", {font: "30px Arial", fill: "white"})

        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		this.myIPVictory= ""
    }

    update() {
        if(this.space.isDown){
            this.scene.stop();
            this.scene.stop("Tiempo_Monedas");
            var sceneMain = this.scene.start("LevelSelector");
            this.scene.bringToTop("LevelSelector");
            this.scene.get("TutorialLevel").MiMusicaBase.pause();
            
             // Verificar si los datos ya se han enviado antes de actualizar
        if (!this.dataSended) {
            this.sendData(); // Llamar al método que envía los datos
         }
        }
    }
    
    setIPVictoria(ip){
		this.myIPVictory = ip;
	}
    
    sendData() {

        // Crear un objeto con los datos del registro

        var recordData = {
            levelID: 1,
            player1: user,
            player2: user,
            timeInSeconds: this.scene.get("Tiempo_Monedas").getTimeInSeconds(),
            coinsCollected: this.scene.get("Tiempo_Monedas").getMonedas(),
            victoria:true
        };

        // Realizar la solicitud POST
        $.ajax({
            url: this.myIPVictory + "api/records",
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