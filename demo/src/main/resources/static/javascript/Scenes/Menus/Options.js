class Options extends Phaser.Scene{

    constructor() {
        super({ key: 'Options' });

    }

    init(data){
        if(data){
            this.sonido = data.sonido;
        }
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
        this.load.image("fondoOpciones", "./ImagesJS/LogIn/Interfaz_Fondo_opciones.png")
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);
        
        this.add.image(600,300, "fondoOpciones").setScale(0.8)


        
        var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)

        Volver.setInteractive()
                .on('pointerdown', ()=> {
                   this.scene.start('StartScreen', {sonido: this.sonido}) ;
                }, this);
                

                this.unMute = this.add.image(600, 300,"unMute").setScale(0.25);
                this.mute = this.add.image(600, 300,"mute").setScale(0.25);
                
                this.sonido ? this.mute.setVisible(false) : this.unMute.setVisible(false); //depende de si hay sonido o no, hacemos visible uno u otro
                
                this.unMute.setInteractive().
                on('pointerdown', ()=> {
                    this.isMute = this.unMute.visible;
                    this.isMute = this.isMute;
                    this.unMute.setVisible(!this.isMute);
                    this.mute.setVisible(this.isMute);
                    this.sonido = false;
                    this.scene.get("StartScreen").checkSound(this.sonido,true)
                }, this);

                this.mute.setInteractive().
                on('pointerdown', ()=> {
                    this.isMute = this.unMute.visible;
                    this.isMute = this.isMute;
                    this.unMute.setVisible(!this.isMute);
                    this.mute.setVisible(this.isMute);
                    this.sonido = true;
                    this.scene.get("StartScreen").checkSound(this.sonido,true)
                }, this);
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}