class Credits extends Phaser.Scene{
    constructor() {
        super({ key: 'Credits' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);
        this.add.image(600,70, "CreditosText").setOrigin(0.5,0.5);
        var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)

        Volver.setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('StartScreen');
                }, this);

        var Creditos = this.add.text(100, 150, 'Este juego ha sido desarrollado por la empresa UpDown-Games, ', { fontSize:30 , fill: 'white' })
        var Creditos = this.add.text(100, 180, 'compuesta por Hugo Silva Gil, Álvaro Redondo Molina, ', { fontSize:30 , fill: 'white' })
        var Creditos = this.add.text(100, 210, 'Carlos Martín Hernández y Luis Mateos Sánchez. ', { fontSize:30 , fill: 'white' })
        var Creditos = this.add.text(100, 260, 'El juego es un multiplataformas con temática medieval', { fontSize:30 , fill: 'white' })
        var Creditos = this.add.text(100, 290, 'cuya finalidad y objetivo principal es el trabajo principal', { fontSize:30 , fill: 'white' })
        var Creditos = this.add.text(100, 320, 'y cooperación para superar los niveles', { fontSize:30 , fill: 'white' })
       
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}