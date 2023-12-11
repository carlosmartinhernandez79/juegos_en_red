class LevelSelector extends Phaser.Scene{
    constructor() {
        super({ key: 'LevelSelector' });
    }

    preload() {
        // Puedes precargar recursos específicos de esta escena aquí
    }

    create() {
        // Lógica de inicialización de la escena
        this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);

        this.add.image(600,70, "NivelesText").setOrigin(0.5,0.5);

        var level1 = this.add.image(300, 250, "PantallaNivel1").setOrigin(0.5,0.5).setScale(0.15);

        level1.setInteractive()
        .on('pointerdown', function () {
            this.scene.start('TutorialLevel');
            //this.scene.get('StartScreen').sonido = false;
            //this.scene.get('StartScreen').checkSound(false);
        }, this);

        var level1 = this.add.graphics();
        level1.fillStyle(0xF0360E, 1);
        level1.fillRect(500, 100, 200, 200);

        var level1Text = this.add.text(530, 320, 'Nivel 1: Fácil', { fill: 'white' })
        .setInteractive()
        .on('pointerdown', function () {
            this.scene.start('TutorialLevel');
        }, this);

        var level2 = this.add.graphics();
        level2.fillStyle(0xF0360E, 1);
        level2.fillRect(800, 100, 200, 200);

        var level2Text = this.add.text(830, 320, 'Nivel 2: Medio', { fill: 'white' })
        .setInteractive()
        .on('pointerdown', function () {
            this.scene.start('TutorialLevel');
        }, this);

        var level3 = this.add.graphics();
        level3.fillStyle(0xF0360E, 1);
        level3.fillRect(500, 360, 200, 200);

        var level3Text = this.add.text(520, 580, 'Nivel 3: Difícil', { fill: 'white' })
        .setInteractive()
        .on('pointerdown', function () {
            this.scene.start('TutorialLevel');
        }, this);

        var Volver = this.add.image(30, 35, "Flecha").setScale(0.2)

        Volver.setInteractive()
                .on('pointerdown', function () {
                    this.scene.start('LogIn');
                }, this);     
    }

    update() {
        // Lógica de actualización de la escena (se llama en cada fotograma)
    }
}