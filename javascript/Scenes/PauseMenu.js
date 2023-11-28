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
        this.add.text(600, 35, "PAUSE", {font: "25px Arial", fill: "black"})
        this.escape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
        if(this.escape.isDown){
            this.scene.stop();
            console.log("Resume")
            var sceneMain = this.scene.resume("SceneJuego");
        }
    }
}