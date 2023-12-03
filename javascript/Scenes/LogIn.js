
class LogIn extends Phaser.Scene {
    constructor() {
        super({ key: 'LogIn' });
    }

    preload() {
        // Precargar los formularios
        console.log('Preload LogIn');
        //this.load.html('player1form', 'javascript/Scenes/player1form.html');
        //this.load.html('player2form', 'javascript/Scenes/player2form.html');
        this.load.html('nameform', 'assets/text/loginform.html');
    }

    create() {


        const element = this.add.dom(400, 600).createFromCache('nameform');
        
        console.log('create LogIn');
        this.data.set('NamePlayer1', 'Player1');
        this.data.set('NamePlayer2', 'Player2');

        // Crear formulario para el Jugador 1
        const player1Form = this.add.dom(200, 300).createFromCache('player1form');
        this.setupForm(player1Form, 'player1name', 'submitPlayer1', 'NamePlayer1');

        // Crear formulario para el Jugador 2
        const player2Form = this.add.dom(600, 300).createFromCache('player2form');
        this.setupForm(player2Form, 'player2name', 'submitPlayer2', 'NamePlayer2');

        // Otro contenido de tu escena (por ejemplo, botones Volver y Jugar)
        var Volver = this.add.text(20, 20, '<---', { fill: 'red' })
            .setInteractive()
            .on('pointerdown', function () {
                this.scene.start('StartScreen');
            }, this);

        var Jugar = this.add.text(600, 550, 'Seleccionar Nivel', { fill: 'red' })
            .setInteractive()
            .on('pointerdown', function () {
                this.scene.start('LevelSelector');
            }, this);
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }

    setupForm(form, inputId, buttonId, dataKey) {
        form.addListener('click');

        form.on('click', function (event) {
            if (event.target.id === buttonId) {
                const playerName = document.getElementById(inputId).value;
                this.data.set(dataKey, playerName);
                console.log(`Nombre del Jugador (${dataKey}):`, playerName);
            }
        }, this);
    }
}
