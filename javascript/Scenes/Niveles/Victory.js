class Victory extends Phaser.Scene{
    constructor() {
        super({ key: 'Victory' });
    }

    preload() {

    }

    create() {
        this.scene.bringToTop();
        const graphics = this.add.graphics();
        this.scene.get("TutorialLevel").MiMusicaBase.pause();

        this.add.image(0,0, "PantallaVictoria").setOrigin(0,0);

        this.add.text(420, 500, "Pulsa ESPACIO para continuar ", {font: "30px Arial", fill: "white"})

        this.add.text(850, 340, this.scene.get("Tiempo_Monedas").getTime(), {font: "30px Arial", fill: "white"})

        this.add.text(520, 340, this.scene.get("Tiempo_Monedas").getMonedas()+ "/3", {font: "30px Arial", fill: "white"})

        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


    }

    update() {
        if(this.space.isDown){
            this.scene.stop();
            this.scene.stop("Tiempo_Monedas");
            var sceneMain = this.scene.start("LevelSelector");
            this.scene.bringToTop("LevelSelector");
            this.scene.get("TutorialLevel").MiMusicaBase.pause();
        }
    }
}