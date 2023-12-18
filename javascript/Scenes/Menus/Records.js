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
        this.add.image(600,70, "CreditosText").setOrigin(0.5,0.5);
        var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)

        Volver.setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('StartScreen');
                }, this);

        var Creditos = this.add.text(200, 200, 'Prueba Gets API REST ', { fontSize:30 , fill: 'white' })
        var spacingX = 200
        var spacingY = 300

        var nombreJ1 = "NONAME";
        console.log(nombreJ1);
            $.ajax({
                url: 'http://localhost:8080/api/records/maxTime/1',
                method: 'GET',
                success: function (data) {
                        // Iterar sobre cada instancia de Record en el array
                            // Acceder a las propiedades de cada instancia de Record y mostrar en la consola
                            //console.log('Registro ' + indice + ':');
                            console.log('   Jugador 1:', data.player1);
                            console.log('   Jugador 2:', data.player2);
                            console.log('   Tiempo:', data.timeInSeconds);
                            console.log('   Nivel:', data.levelID); // Asumiendo que tienes una propiedad levelID
                            console.log('   Monedas:', data.coinsCollected);

                            nombreJ1 = data.player1;
                            /*var textoAux = this.add.text(spacingX, spacingY, toString(data.player1), { fontSize:30 , fill: 'white' })
                            var textoAux = this.add.text(spacingX+100, spacingY, toString(data.player2), { fontSize:30 , fill: 'white' })
                            var textoAux = this.add.text(spacingX, spacingY+50, toString(data.timeInSeconds), { fontSize:30 , fill: 'white' })
                            var textoAux = this.add.text(spacingX+100, spacingY+50, toString(data.coinsCollected), { fontSize:30 , fill: 'white' })*/
                            var textoAux = this.add.text(spacingX, spacingY, nombreJ1, { fontSize: 30, fill: 'white' });

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