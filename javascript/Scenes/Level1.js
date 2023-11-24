class Level1 extends Phaser.Scene{
    constructor() {
        super({ key: 'Level1' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.text(720, 20, "Level1", {font: "25px Arial", fill: "black"})
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}