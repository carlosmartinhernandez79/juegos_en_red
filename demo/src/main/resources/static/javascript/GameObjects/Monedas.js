class Monedas extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){

        super(scene,x,y,"moneda");

        this.scenav = scene;

        this.moneda = scene.add.existing(this);

        this.moneda.scene.physics.world.enableBody(this);

        
        this.moneda.setScale(0.2);

        this.moneda.body.setAllowGravity(false) 

        scene.misMonedas.add(this)

        this.SonidoMoneda = this.scene.sound.add("Sonido_Moneda");

        this.anims.create({
            key: 'moneySpin',
            frames: this.anims.generateFrameNumbers('moneyAnimation', { start: 0, end: 8 }),
            frameRate: 15,
            repeat : -1
        });

        this.moneda.play("moneySpin")
    }

    pickUp(){
        this.destroy();
        this.SonidoMoneda.play();
    }
    pick(){
		this.destroy();
        this.SonidoMoneda.play();
	}
}   
