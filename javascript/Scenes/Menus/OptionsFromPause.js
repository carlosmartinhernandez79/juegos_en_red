class OptionsFromPause extends Phaser.Scene{
    constructor() {
        super({ key: 'OptionsFromPause' });
    }

    init(data){
        if(data){
            this.sonido = data.sonido;
        }
    }

    create() {

        const graphics = this.add.graphics();

        graphics.fillStyle(0x000000, 1);
        graphics.fillRect(0, 0, 1200, 600);
        graphics.alpha = 0.5

        this.add.text(600, 20, "Opciones de pausa", {font: "25px Arial", fill: "white"})

        var Volver = this.add.text(20, 20, "Atrás", {font: "40px Arial", fill: 'white' })
                .setInteractive()
                .on('pointerdown', function () {
                    this.scene.bringToTop("PauseMenu") //mostramos sobre todas la de pausa
                    this.scene.run("PauseMenu") //la despertamos
                    this.scene.sendToBack("OptionsFromPause") //enviamos esta escena al fondo
                }, this);


                this.add.text(600, 20, "Opciones", {font: "25px Arial", fill: "white"})
        
                
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
                        this.scene.get("TutorialLevel").setSound(this.sonido)
                }, this);
        
                this.mute.setInteractive().
                on('pointerdown', ()=> {
                        this.isMute = this.unMute.visible;
                        this.isMute = this.isMute;
                        this.unMute.setVisible(!this.isMute);
                        this.mute.setVisible(this.isMute);
                        this.sonido = true;
                        this.scene.get("StartScreen").checkSound(this.sonido, false)
                        this.scene.get("TutorialLevel").setSound(this.sonido)
                }, this);

    }
    
    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}