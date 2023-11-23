class Credits extends Phaser.Scene{
    constructor() {
        super({ key: 'Credits' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.text(720, 20, "Credits", {font: "25px Arial", fill: "black"})

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