class StartScreen extends Phaser.Scene{
    constructor() {
        super({ key: 'StartScreen' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
        
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.text(720, 20, "StartScreen", {font: "25px Arial", fill: "black"})

        
            // Botón Jugar
            var botonJugar = this.add.text(1080, 305, 'Jugar', { fill: '#0f0' })
                .setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('LogIn');
                }, this);
        
            // Botón Opciones
            var botonOpciones = this.add.text(1080, 405, 'Opciones', { fill: '#0f0' })
                .setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('Options');
                }, this);
        
            // Botón Créditos
            var botonCreditos = this.add.text(1080, 505, 'Créditos', { fill: '#0f0' })
                .setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('Credits');
                }, this);
        
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}

//export default StartScreen;