class Records extends Phaser.Scene{
    constructor() {
        super({ key: 'Records' });
        this.myRecordsIP = "";
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
        //var Creditos = this.add.text( 520, 150, 'Top Players ', { fontSize:30 , fill: 'white' })
        var spacingX = 0
        var spacingY = 200
        var contextoPhaser = this;
        //var nombreJ1 = user;
        /*var record = {
            "id": 2,
            "levelID": 2,
            "player1": "Gerardo",
            "player2": "Marcos",
            "timeInSeconds": 500,
            "coinsCollected": 75,
            "puntuation": 2125,
            "victoria": true
        };*/
        //var recordSlot = new RecordSlot(contextoPhaser, record);
        //recordSlot.displaySlot(spacingX, spacingY);
        console.log("3 Tu IP es: " + this.myRecordsIP);
        $.ajax({
            url: this.myRecordsIP + 'api/records/top5ByPunctuation',
            method: 'GET',
            success: function (data) {
                // Iterar sobre cada instancia de Record en el array
				for (var i = 0; i < data.length; i++) {
                    var record = data[i];
                    // Acceder a las propiedades de cada instancia de Record y mostrar en la consola
                    console.log('   Registro ' + (i + 1) + ':');
                    console.log('   Jugador 1:', record.player1);
                    console.log('   Jugador 2:', record.player2);
                    console.log('   Tiempo:', record.timeInSeconds);
                    console.log('   Nivel:', record.levelID);
                    console.log('   Monedas:', record.coinsCollected);

                    //new RecordSlot(contextoPhaser, spacingX, spacingY, record);
                    var recordSlot = new RecordSlot(contextoPhaser, record);
                    recordSlot.displaySlot(spacingX, spacingY);
                    spacingY += 125;
                }
            },
            error: function (error) {
                console.error('Error al obtener registros:', error);
            }
        });
        
        /*
        console.log(nombreJ1);
            $.ajax({
                url: this.myRecordsIP + '/api/records/maxPuntuation/1',
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
       */
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }

    setIPRecords(ip){
		this.myRecordsIP = ip;
        console.log("IP de records: " + this.myRecordsIP);
	}
}