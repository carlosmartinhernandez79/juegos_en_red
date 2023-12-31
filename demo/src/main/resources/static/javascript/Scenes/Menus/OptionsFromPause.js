class OptionsFromPause extends Phaser.Scene{
    constructor() {
        super({ key: 'OptionsFromPause' });
    }

    init(data){
        if(data){
            this.sonido = data.sonido;
            this.pantalla = data.pantalla
        }
    }

    create() {

        const graphics = this.add.graphics();

        graphics.fillStyle(0x000000, 1);
        graphics.fillRect(0, 0, 1200, 600);
        graphics.alpha = 0.5

        this.add.image(600,70, "OpcionesText").setOrigin(0.5,0.5);
        
        var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)

        Volver.setInteractive()
                .on('pointerdown', function () {
                    this.scene.bringToTop("PauseMenu") //mostramos sobre todas la de pausa
                    this.scene.run('PauseMenu', {sonido: this.sonido, pantalla: this.pantalla}) //y lo ejecutamos
                    this.scene.sendToBack("OptionsFromPause") //enviamos esta escena al fondo
                }, this);
        
                
                this.unMute = this.add.image(600, 300,"unMute").setScale(0.75);
                this.mute = this.add.image(600, 300,"mute").setScale(0.75);
                        
                this.sonido ? this.mute.setVisible(false) : this.unMute.setVisible(false); //depende de si hay sonido o no, hacemos visible uno u otro
                        
                this.unMute.setInteractive().
                on('pointerdown', ()=> {
                        this.isMute = this.unMute.visible;
                        this.isMute = this.isMute;
                        this.unMute.setVisible(!this.isMute);
                        this.mute.setVisible(this.isMute);
                        this.sonido = false;
                        this.scene.get("StartScreen").checkSound(this.sonido, false)
                        this.scene.get(this.pantalla).setSound(this.sonido)
                }, this);
        
                this.mute.setInteractive().
                on('pointerdown', ()=> {
                        this.isMute = this.unMute.visible;
                        this.isMute = this.isMute;
                        this.unMute.setVisible(!this.isMute);
                        this.mute.setVisible(this.isMute);
                        this.sonido = true;
                        this.scene.get("StartScreen").checkSound(this.sonido, false)
                        this.scene.get(this.pantalla).setSound(this.sonido)
                }, this);

    }
    
    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}