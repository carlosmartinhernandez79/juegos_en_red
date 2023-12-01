class PauseMenu extends Phaser.Scene{
    constructor() {
        super({ key: 'PauseMenu' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
        console.log("pause")
    }

    create() {
        // Lógica de inicialización de la escena
        const graphics = this.add.graphics();

        graphics.fillStyle(0x000000, 1);
        graphics.fillRect(0, 0, 1200, 600);
        graphics.alpha = 0.5

        this.add.text(600, 35, "PAUSE", {font: "25px Arial", fill: "white"})
        this.escape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
        if(this.escape.isDown){
            this.scene.stop();
            console.log("Resume")
            this.scene.resume("Tiempo_Monedas");
            var sceneMain = this.scene.resume("SceneJuego");
            this.scene.get("SceneJuego").MiMusicaBase.resume();
        }
    }
}