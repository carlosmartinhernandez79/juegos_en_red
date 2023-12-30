class Records extends Phaser.Scene{
    constructor() {
        super({ key: 'Records' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);
        this.add.image(600,70, "MarcoRecord").setOrigin(0.5,0.5);
        var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)

        Volver.setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('StartScreen');
                }, this);
        var contextoPhaser = this;      
        var Creditos = this.add.text( 520, 150, 'Top Players ', { fontSize:30 , fill: 'white' })
        var spacingX = 200
        var spacingY = 300
        var contextoPhaser = this;
        var nombreJ1 = user;
        console.log(nombreJ1);
            $.ajax({
                url: 'http://localhost:8080/api/records/maxPuntuation/1',
                method: 'GET',
                success: function (data) {
                      var textoAux = contextoPhaser.add.text(spacingX-150, spacingY, "Nivel "+data.levelID, { fontSize:30 , fill: 'white' })
                      var textoAux = contextoPhaser.add.text(spacingX, spacingY, "Jugador "+data.player1, { fontSize:30 , fill: 'white' })
                      var textoAux = contextoPhaser.add.text(spacingX+300, spacingY, "Puntuacion "+data.puntuation, { fontSize:30 , fill: 'white' })
                },
                error: function (error) {
                    console.error('Error al obtener registros:', error);
                }
            });
       
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}