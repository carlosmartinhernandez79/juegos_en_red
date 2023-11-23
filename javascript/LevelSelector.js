class LevelSelector extends Phaser.Scene{
    constructor() {
        super({ key: 'LevelSelector' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.text(720, 20, "Level Selector", {font: "25px Arial", fill: "black"})

        var Volver = this.add.text(20, 20, '<---', { fill: 'red' })
                .setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('StartScreen');
                }, this);

                var Leve1 = this.add.text(720, 700, 'Nivel 1 Nivel', { fill: 'red' })
                .setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('Level1');
                }, this);
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}