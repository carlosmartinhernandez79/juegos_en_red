class Tiempo_Monedas extends Phaser.Scene{
    constructor() {
        super({ key: 'Tiempo_Monedas' });
    }

    create(){
        var miMoneda=this.add.image(50, 50, 'moneda');

        this.count = 0;

        this.label = this.add.text(100, 35, "0", {font: "25px Arial", fill: "black"})

        miMoneda.setScale(0.13)
    }

    updateCount()
	{
        this.count+=1;
		this.label.text = `${this.count}`
	}
}
