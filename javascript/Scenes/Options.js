class Options extends Phaser.Scene{
    constructor() {
        super({ key: 'Options' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.text(600, 20, "Options", {font: "25px Arial", fill: "black"})

        var Volver = this.add.text(20, 20, '<---', { fill: 'red' })
                .setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('StartScreen');
                }, this);
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}