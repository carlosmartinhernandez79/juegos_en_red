class OptionsFromPause extends Phaser.Scene{
    constructor() {
        super({ key: 'OptionsFromPause' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
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


        ///INTENTO DE IMPLEMENTAR UN MUTE DE LA MUSICA --> fail pero por la gestión de escenas, no se guarda bien el cambio
        //puesto que runeo todo el rato, no hago pause y resume

        /*var muteOn =this.add.image(600, 300, "muteOn").setScale(0.5)
        var muteOff =this.add.image(600, 300, "muteOff").setVisible(false).setScale(0.5)
    
        muteOn.setInteractive()
        .on('pointerdown', function () {

            muteOff.setVisible(true)
            muteOn.setVisible(false)

            this.scene.get("TutorialLevel").MiMusicaBase.pause();
            
        }, this);

        muteOff.setInteractive()
        .on('pointerdown', function () {

            muteOff.setVisible(false)
            muteOn.setVisible(true)
            this.scene.get("TutorialLevel").MiMusicaBase.resume();
            
        }, this);*/ 
    }
    
    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}