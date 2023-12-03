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

        this.add.text(420, 350, "Pulsa ESPACIO para reiniciar ", {font: "25px Arial", fill: "white"})

        this.add.text(550, 500, this.scene.get("Tiempo_Monedas").getTime(), {font: "25px Arial", fill: "white"})

        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


    }

    update() {
        if(this.space.isDown){
            this.scene.stop();
            var sceneMain = this.scene.start("TutorialLevel");
            this.scene.get("TutorialLevel").MiMusicaBase.pause();
        }
    }
}