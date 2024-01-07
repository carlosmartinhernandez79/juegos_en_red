class Tiempo_Monedas extends Phaser.Scene{
    constructor() {
        super({ key: 'Tiempo_Monedas' });
    }
    
    init(data){
		if(data){
			this.pantalla = data.pantalla;
		}
	}

    create(){
        var miMoneda=this.add.image(50, 50, 'moneda');
        var miReloj=this.add.image(1090, 50, 'reloj');

        //this.barraTiempo=this.add.image(1000, 300, 'ground').setScale(4,1).setOrigin(1,0.5);

        miReloj.setScale(0.07)

        this.count = 0;

        this.labelMonedas = this.add.text(100, 35, "0", {font: "25px Arial", fill: "white"})

        miMoneda.setScale(0.13)


        this.labelTimer = this.add.text(1125, 35, "0:00", {font: "25px Arial", fill:  "white" })
        this.seconds = 0;//0
        this.minutes = 4;//4
    }

    updateCount()
	{
        this.count+=1;
		this.labelMonedas.text = `${this.count}`
	}


    update(time, delta){
        this.seconds-=(delta/1000);
        
		this.labelTimer.text = this.updateTimer();
        
        //this.barraTiempo.setScale(this.toInt(), 1) --> si queremos que en vez de que sean numeros sea una barra

        this.checkIfEnd();
    }

    updateTimer(){

       var final;
       
       var aux = Math.round(this.seconds)

        if(aux<10){
            final = "0" +`${Math.round(this.minutes)}` + ":0" +  `${Math.round(this.seconds)}`
        }
        else{
            final ="0" +`${Math.round(this.minutes)}`+ ":"  +  `${Math.round(this.seconds)}`
        }


        if(aux<0){
            this.minutes -= 1
            this.seconds = 59;
            final ="0" +`${Math.round(this.minutes)}` + ":"+ `${Math.round(this.seconds)}`
        }

        if(this.minutes == 0 && this.seconds <30){
            this.labelTimer.setTint(0xff0000)
        }
        
         return final;
    }

    checkIfEnd(){
        if(this.minutes==0 && this.seconds < 1){
			this.scene.start("GameOver",{pantalla: this.pantalla});
        }
    }

    getTime(){
       if(this.seconds<10){
        return ("0" +`${Math.round(this.minutes)}` + ":"+ "0" +`${Math.round(this.seconds)}`)
       }
       else{
        return ("0" +`${Math.round(this.minutes)}` + ":"+ `${Math.round(this.seconds)}`)
       }
    }

    getMonedas(){
        return this.count
     }
     
     getTimeInSeconds(){
        return ((this.minutes*60 + this.seconds))
     }
    

     toInt(){
        return((this.minutes*60 + this.seconds)/100)
     }
}
