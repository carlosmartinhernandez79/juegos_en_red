class StartScreen extends Phaser.Scene{
    constructor() {
        super({ key: 'StartScreen' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí

    }

    create() {
        // Lógica de inicialización de la escena
        this.add.text(600, 20, "StartScreen", {font: "25px Arial", fill: "black"})
        this.add.image(0,0, "PantallaInicial").setOrigin(0,0);

        this.opcionesClickado = false;

            // Botón Créditos
            var botonCreditos = this.add.image(1000, 450, "BotonCreditosOff").setScale(0.75)
                .setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('Credits');
                    this.scene.bringToTop('Credits');
                }, this);
        
                //////////////////////////////////////////////////////////////////////////
                this.JugarOff = this.add.image(1000, 150,"BotonJugarOff").setScale(0.75);
                this.JugarOn = this.add.image(1000, 150,"BotonJugarOn").setScale(0.85);
                this.BotonJugar = this.JugarOff
                this.JugarOn.setVisible(false);
                this.BotonJugar.setInteractive()
                
                this.BotonJugar.on('pointerover',()=>{
                    this.JugarOn.setVisible(true);
                })
                
                this.BotonJugar.on('pointerout',()=>{
                    this.JugarOff.setVisible(true);
                    this.JugarOn.setVisible(false);
                })
                
                this.BotonJugar.on('pointerdown', function () {
                    this.scene.start('LogIn');
                }, this);
                //////////////////////////////////////////////////////////////////////////
                this.OpcionesOff = this.add.image(1000, 300,"BotonOpcionesOff").setScale(0.75);
                this.OpcionesOn = this.add.image(1000, 300,"BotonOpcionesOn").setScale(0.85);
                this.BotonOpciones = this.OpcionesOff
                this.OpcionesOn.setVisible(false);
                this.BotonOpciones.setInteractive()
                
               this.BotonOpciones.on('pointerover',()=>{
                    this.OpcionesOn.setVisible(true);
                })
                
                this.BotonOpciones.on('pointerout',()=>{
                    this.OpcionesOff.setVisible(true);
                    this.OpcionesOn.setVisible(false);

                })
                
                this.BotonOpciones.on('pointerdown', function () {
                    this.scene.start('Options');
                }, this);
                //////////////////////////////////////////////////////////////////////////
                this.CreditosOff = this.add.image(1000, 450,"BotonCreditosOff").setScale(0.75);
                this.CreditosOn = this.add.image(1000, 450,"BotonCreditosOn").setScale(0.85);
                this.BotonCreditos = this.CreditosOff
                this.CreditosOn.setVisible(false);
                this.BotonCreditos.setInteractive()
                
                this.BotonCreditos.on('pointerover',()=>{
                    this.CreditosOn.setVisible(true);
                })
                
                this.BotonCreditos.on('pointerout',()=>{
                    this.CreditosOff.setVisible(true);
                    this.CreditosOn.setVisible(false);


                })
                
                this.BotonCreditos.on('pointerdown', function () {
                    this.scene.start('Credits');
                }, this);
                //////////////////////////////////////////////////////////////////////////

    }

    update(delta, time) {
        
    }
}

//export default StartScreen;

//var botonJugar = this.add.text(1000, 200, 'Jugar', { fill: '#0f0' })