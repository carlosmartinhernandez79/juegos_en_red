class Options extends Phaser.Scene{
    constructor() {
        super({ key: 'Options' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);

        this.add.text(600, 20, "Options", {font: "25px Arial", fill: "white"})

        var Volver = this.add.text(20, 20, '<---', { fill: 'cyan' })
                .setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('StartScreen');
                }, this);
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}