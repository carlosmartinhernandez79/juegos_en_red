class LogScreen extends Phaser.Scene{
    constructor() {
        super({ key: 'LogScreen' });

       
    }
    preload(){

    }
    create(){
        this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);

        this.add.text(530,340,"CONTRASEÑA").setOrigin(0,0);    
        this.add.text(540,190,"USUARIO").setOrigin(0,0);   

        this.username = document.getElementById("utext")
        this.username.style.display = "block"

        this.password = document.getElementById("ptext")
        this.password.style.display = "block"

        this.aceptar = document.getElementById("aceptar")
        this.aceptar.style.display = "block"
        
        this.registrarse = document.getElementById("registrarse")
        this.registrarse.style.display = "block"


        this.aceptar.addEventListener("click", ()=>{
            alert(this.password.value) //forma de obtener info de los estos
        });
    }
}