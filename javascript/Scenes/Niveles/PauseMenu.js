class PauseMenu extends Phaser.Scene{
    constructor() {
        super({ key: 'PauseMenu' });
    }
    init(data){
        if(data){
            this.sonido = data.sonido;
        }
    }
    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
        console.log("pause")
    }

    create() {
        // Lógica de inicialización de la escena
        const graphics = this.add.graphics();

        graphics.fillStyle(0x000000, 0.5);
        graphics.fillRect(0, 0, 1200, 600);
        //graphics.alpha = 0.5     

        this.add.text(560, 35, "PAUSE", {font: "25px Arial", fill: "white"})
        this.escape = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);


        this.menuOff = this.add.image(600,200,"menuOff").setScale(0.6);
        this.menuOn = this.add.image(600,200,"menuOn");
        
        this.menu = this.menuOff

        this.menu.setInteractive();
        this.menuOn.setVisible(false);

        /*this.menu.on('pointerover',()=>{
            this.menuOff.setVisible(false);
            this.menuOn.setVisible(true);
            this.menu = this.menuOn;
        })
        
        this.menuOff.on('pointerout',()=>{
            this.menuOff.setVisible(true);
            this.menuOn.setVisible(false);
            this.menu = this.menuOff;
        })*/

        this.menu.on('pointerdown', function () {
            this.scene.start('StartScreen',{sonido: this.scene.get("TutorialLevel").getSound()});
            this.scene.bringToTop('StartScreen');
            this.scene.sendToBack('TutorialLevel');
            this.scene.sleep('PauseMenu');
            this.scene.sendToBack('OptionsFromPause');
            this.scene.sendToBack('Tiempo_Monedas');
        }, this);



        //--------------------------------------------------
        this.opcionesOff = this.add.image(600,300,"opcionesOff").setScale(0.6);
        this.opcionesOn = this.add.image(600,300,"opcionesOn");
        
        this.opciones = this.opcionesOff

        this.opciones.setInteractive();
        this.opcionesOn.setVisible(false);

      /*  this.opciones.on('pointerover',()=>{
            this.opcionesOff.setVisible(false);
            this.opcionesOn.setVisible(true);
            this.opciones = this.opcionesOn;
        })
        
        this.opciones.on('pointerout',()=>{
            this.opcionesOff.setVisible(true);
            this.opcionesOn.setVisible(false);
            this.opciones = this.opcionesOff;
        })*/

        this.opciones.on('pointerdown', function () {
            console.log(this.scene.get("StartScreen").isMusicOn()+ ": FROM PAUSE MENU")
            this.scene.start('OptionsFromPause', {sonido: this.scene.get("StartScreen").isMusicOn()});
            this.scene.bringToTop('OptionsFromPause'); //mostramos sobre todas esta escena
            this.scene.pause('PauseMenu'); //dormimos la otra, porque no queremos perder lo que hagamos en el menu de pausa
            this.scene.sendToBack('TutorialLevel'); //enviamos al fondo la de tutorial
            //this.scene.sendToBack('Tiempo_Monedas');
        }, this);

        //----------------------------------------------
        this.reiniciarOff = this.add.image(600,400,"reiniciarOff").setScale(0.6);
        this.reiniciarOn = this.add.image(600,400,"reiniciarOn");
        this.reiniciar = this.reiniciarOff
        this.reiniciarOn.setVisible(false);
        this.reiniciar.setInteractive()

       /* this.reiniciar.on('pointerover',()=>{
            this.reiniciarOff.setVisible(false);
            this.reiniciarOn.setVisible(true);
            this.reiniciar = this.reiniciarOn;
        })
        
        this.reiniciar.on('pointerout',()=>{
            this.reiniciarOff.setVisible(true);
            this.reiniciarOn.setVisible(false);
            this.reiniciar = this.reiniciarOff;
        })*/

        this.reiniciar.on('pointerdown', function () {
            this.scene.start('TutorialLevel');
        }, this);

        //-------------------------------------------------

        this.nivelesOff = this.add.image(600,500,"nivelesOff").setScale(0.6);
        this.nivelesOn = this.add.image(600,500,"nivelesOn");
        this.niveles = this.nivelesOff;

        this.nivelesOn.setVisible(false);
        this.niveles.setInteractive()

       /* this.niveles.on('pointerover',()=>{
            this.nivelesOff.setVisible(false);
            this.nivelesOn.setVisible(true);
            this.niveles = this.nivelesOn;
        })
        
        this.niveles.on('pointerout',()=>{
            this.nivelesOff.setVisible(true);
            this.nivelesOn.setVisible(false);
            this.niveles = this.nivelesOff;
        })*/

        this.niveles.on('pointerdown', function () {
            this.scene.start('LevelSelector');
            this.scene.bringToTop('LevelSelector');
            this.scene.sendToBack('TutorialLevel');
            this.scene.sendToBack('Tiempo_Monedas');
        }, this);


    }


    
    /*button.on('pointerover',function(pointer){
        button.setFrame(1);
    })
    
    button.on('pointerout',function(pointer){
        button.setFrame(0);
    })*/

    update() {
        if(this.escape.isDown){
            this.scene.sleep();
            console.log("Resume")
            this.scene.resume("Tiempo_Monedas");
            var sceneMain = this.scene.resume("TutorialLevel");
            this.scene.get("TutorialLevel").checkSound()
            console.log(this.scene.get("TutorialLevel").getSound());

        }
    }
}