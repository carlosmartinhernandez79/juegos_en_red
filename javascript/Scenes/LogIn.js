class LogIn extends Phaser.Scene{
    constructor() {
        super({ key: 'LogIn' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.text(720, 20, "LogIn", {font: "25px Arial", fill: "black"})

        this.add.text(360, 600, "Enano", {font: "25px Arial", fill: "black"})

        this.add.text(1080, 600, "Elfa", {font: "25px Arial", fill: "black"})

        var Volver = this.add.text(20, 20, '<---', { fill: 'red' })
                .setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('StartScreen');
                }, this);


        var Jugar = this.add.text(720, 750, 'Seleccionar Nivel', { fill: 'red' })
                .setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('LevelSelector');
                }, this);
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}

//export default Escena2;
