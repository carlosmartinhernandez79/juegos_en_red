class LogIn extends Phaser.Scene{
    constructor() {
        super({ key: 'LogIn' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);

        this.add.text(600, 20, "LogIn", { font: "25px Arial", fill: "white" })

        this.add.image(300, 300, "GnomoPng").setScale(0.1);

        this.add.image(700, 300, "ElfaPng").setScale(0.15);

        var Volver = this.add.text(20, 20, '<---', { fill: 'cyan' })
            .setInteractive()
            .on('pointerdown', function () {
                this.scene.start('StartScreen');
            }, this);

        this.data.set('NamePlayer1', "Player1");
        this.data.set('NamePlayer2', "Player2");


        this.NivelesOff = this.add.image(600, 525,"BotonNivelesOff").setScale(0.75);
        this.NivelesOn = this.add.image(600, 525,"BotonNivelesOn").setScale(0.85);
        this.BotonNiveles = this.NivelesOff
        this.NivelesOn.setVisible(false);
        this.BotonNiveles.setInteractive()
        
        this.BotonNiveles.on('pointerover',()=>{
            this.NivelesOff.setVisible(false);
            this.NivelesOn.setVisible(true);
            this.BotonNiveles = this.NivelesOn;
        })
        
        this.BotonNiveles.on('pointerout',()=>{
            this.NivelesOff.setVisible(true);
            this.NivelesOn.setVisible(false);
            this.BotonNiveles = this.NivelesOff;
        })
        
        this.BotonNiveles.on('pointerdown', function () {
            this.scene.start('LevelSelector');
        }, this);
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}

//export default Escena2;
