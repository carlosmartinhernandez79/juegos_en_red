class LogScreen extends Phaser.Scene{
    constructor() {
        super({ key: 'LogScreen' });

       this.logged = false;
    }

    
    preload(){
		
		this.load.image("fondoLog", "./ImagesJS/LogIn/Fondo_login.png");
        this.load.image("fondoReg", "./ImagesJS/LogIn/Fondo_registrar.png");
         this.load.image("fondoCambiarContrasena", "./ImagesJS/LogIn/Interfaz_CambiarContrasena.png");
         this.load.image("fondoBorrar", "./ImagesJS/LogIn/Interfaz_Borrar.png")
        
        this.load.image("flechaBack", "./ImagesJS/LogIn/Interfaz_Boton_Flecha.png")
        
         this.load.image("fondoReg", "./ImagesJS/LogIn/text_contrasena_actualizada.png");
         
         this.load.image("contraActu", "./ImagesJS/LogIn/texto_contrasena_actualizada.png");
         this.load.image("usuElim", "./ImagesJS/LogIn/texto_usuario_eliminado.png");
         this.load.image("usuRegis", "./ImagesJS/LogIn/texto_usuario_registrado.png");
         this.load.image("errorText", "./ImagesJS/LogIn/texto_error_operacion.png");
         
		this.load.html('UsernameInput', 'UsernameInput.html');
		this.load.html('PasswordInput', 'PasswordInput.html');
    }
    
    create(){
		
//TODO LO DEL HTML NUEVO
 /*	var username = this.add.dom(600, 200).createFromCache('UsernameInput');
 	var password = this.add.dom(600, 280).createFromCache('PasswordInput');
 //const inputText = this.getChildByName('nameField)
        var username = username.getChildByName("utext") //me dice que no existe elbyname
        //this.username.style.display = "block"

        var password = password.getChildByName("ptext")
        //this.password.style.display = "block"
        
 */
 
 
 
/////////////////////////////////////////////////////////////////////////////////////////////
	var myIP;

		fetch('/Usuarios/getServerIp')
                .then(response => response.text())
                .then(data => {
                myIP = "http://"+data+":8080/"
                console.log("La ip es: " + data); 
        });
        


        this.fo = this.add.image(0,0, "FondoOscuroVacio").setOrigin(0,0);

        this.fondoLogin = this.add.image(600,300, "fondoLog").setScale(0.7)
        this.fondoRegistrar = this.add.image(600,300, "fondoReg").setScale(0.7).setVisible(false)
        this.fondoCambiarContrasena = this.add.image(600,300, "fondoCambiarContrasena").setScale(0.7).setVisible(false)
        this.fondoBorrar = this.add.image(600,300, "fondoBorrar").setScale(0.7).setVisible(false)
        
        
        this.flecha = this.add.image(450,480,"flechaBack").setScale(0.2).setVisible(false);
        
        this.usuElim = this.add.image(100,30,"usuElim").setScale(0.4).setVisible(false);
        this.contraActu = this.add.image(120,30,"contraActu").setScale(0.4).setVisible(false);
        this.usuRegis = this.add.image(100,30,"usuRegis").setScale(0.4).setVisible(false);
        this.errorText = this.add.image(140,30,"errorText").setScale(0.4).setVisible(false);

     	 this.LogThings = document.getElementById("LogThings")
        this.LogThings.style.display = "block"

        var username = document.getElementById("utext")
        //this.username.style.display = "block"

        var password = document.getElementById("ptext")
        //this.password.style.display = "block"

        this.aceptar = document.getElementById("aceptar")
        //this.aceptar.style.display = "block"
        
        
       this.registrarse = document.getElementById("registrarse")
       // this.registrarse.style.display = "block"
       
       this.registrarse.style.display = "none"

        this.goToRegister = document.getElementById("goToRegister")
        
        this.forgetPassword = document.getElementById("forgetPassword")
     
        this.changePassword = document.getElementById("changePassword")
		this.changePassword.style.display = "none"
        
         this.deleteUser = document.getElementById("deleteUser");
         
         
         this.aceptar2 = document.getElementById("aceptar2");
        
         this.aceptarBorrar = document.getElementById("aceptarBorrar");
         
         
        username.value = null;
        password.value = null;
        
         this.aceptarBorrar.addEventListener("click", ()=>{
			 
            this.registrarse.style.display = "none"
            this.aceptar.style.display = "block"
            this.goToRegister.style.display = "block"
            this.forgetPassword.style.display = "block"
            this.deleteUser.style.display = "block"  
            this.aceptarBorrar.style.display = "none"
			 
			this.fondoLogin.setVisible(true)
            this.fondoRegistrar.setVisible(false)
            this.fondoBorrar.setVisible(false)
		 })
		 
		 
         this.deleteUser.addEventListener("click", ()=>{

            this.registrarse.style.display = "block"
            this.aceptar.style.display = "none"
            this.goToRegister.style.display = "none"
            this.forgetPassword.style.display = "none"
            this.deleteUser.style.display = "none"
            this.aceptarBorrar.style.display = "block"
            
            this.fondoLogin.setVisible(false)
            this.fondoRegistrar.setVisible(false)
            this.fondoBorrar.setVisible(true)
            
            this.flecha.setVisible(true)

        })
        

        this.goToRegister.addEventListener("click", ()=>{

            this.registrarse.style.display = "block"
            this.aceptar.style.display = "none"
            this.goToRegister.style.display = "none"
            this.forgetPassword.style.display = "none"
            this.deleteUser.style.display = "none"
            
            this.aceptar2.style.display = "block";
            
            this.fondoLogin.setVisible(false)
            this.fondoRegistrar.setVisible(true)
            
            this.flecha.setVisible(true)

        })
        


        this.aceptar2.addEventListener("click", ()=>{

            this.registrarse.style.display = "none"
            this.aceptar.style.display = "block"
            this.goToRegister.style.display = "block"
            this.changePassword.style.display = "none"
            this.forgetPassword.style.display = "block"
            this.deleteUser.style.display = "block"
            
            this.aceptar2.style.display = "none";
            
            this.fondoLogin.setVisible(true)
            this.fondoRegistrar.setVisible(false)

            this.flecha.setVisible(false)
        })
        
         this.forgetPassword.addEventListener("click", ()=>{

            this.registrarse.style.display = "none"
            this.aceptar.style.display = "none"
            this.goToRegister.style.display = "none"
            this.changePassword.style.display = "block"
            this.forgetPassword.style.display = "none"
            this.deleteUser.style.display = "none"    
            this.aceptar2.display = "block";
            
            this.fondoCambiarContrasena.setVisible(true);
            this.fondoLogin.setVisible(false)
            password.placeholder="Nueva contraseña"

 			this.flecha.setVisible(true)
        })
        
        this.changePassword.addEventListener("click", ()=>{

            this.registrarse.style.display = "none"
            this.aceptar.style.display = "block"
            this.goToRegister.style.display = "block"
            this.forgetPassword.style.display = "block"
            this.deleteUser.style.display = "block"  
            this.changePassword.style.display = "none"
            

            password.placeholder="Contraseña"
            this.flecha.setVisible(false)

        })
        
       
        this.flecha.setInteractive().
                on('pointerdown', ()=> {
					
           	this.forgetPassword.style.display = "block"
            this.aceptar.style.display = "block"
            this.goToRegister.style.display = "block"
            this.changePassword.style.display = "none"
            this.registrarse.style.display = "none"
            this.deleteUser.style.display = "block"  
            this.aceptar2.style.display = "none";
            this.aceptarBorrar.style.display = "none"
            
       		password.placeholder="Contraseña"
       		
            this.fondoLogin.setVisible(true)
            
            this.fondoRegistrar.setVisible(false)
			this.fondoCambiarContrasena.setVisible(false)
			this.fondoBorrar.setVisible(false)
            
            this.flecha.setVisible(false)

        },this)
        
       

		var myScene = this.scene;
		var usuElim =  this.usuElim;
        var contraActu = this.contraActu;
        var usuRegis = this.usuRegis;
        var errorText = this.errorText;

            
              $(document).ready(function() {
  					$('#aceptar2').click(registrarse);
  					$('#aceptar').click(aceptarFun);
  					$('#changePassword').click(changePassword);
  					$('#aceptarBorrar').click(deleteUserF);
			});
			
			
			function deleteUserF(){
				$.ajax({
                method: "DELETE",

                  url: myIP+"Usuarios/" + username.value,

                  contentType: "application/json"

              }).done(function(data) {

                 usuElim.setVisible(true);
                 
                username.value = null;
        		password.value = null;
                
                setTimeout(() => {
  					usuElim.setVisible(false);
				}, 2000);
				
             }).fail(function(data) {

                errorText.setVisible(true);
                
                username.value = null;
        		password.value = null;
                
                setTimeout(() => {
  				 	errorText.setVisible(false);
				}, 2000);
             })
				
			}
			
			function changePassword(){
				
				$.ajax({
                method: "PUT",

                  url: myIP+"Usuarios/" + username.value,

                  data:  password.value,

                  contentType: "application/json"

              }).done(function(data) {

                contraActu.setVisible(true);
                
                 username.value = null;
        		password.value = null;
                
                setTimeout(() => {
  				 contraActu.setVisible(false);
				}, 2000);

             }).fail(function(data){
				 
				 username.value = null;
        		 password.value = null;
				 
				 errorText.setVisible(true);
                
                setTimeout(() => {
  				 	errorText.setVisible(false);
				}, 2000); 
				
			 })

			}

			function registrarse() {
		
  				$.ajax({
                method: "POST",
                
  				url: myIP+"Usuarios",
  				
  				data: JSON.stringify({ username: username.value, password: password.value }),
  				
  				contentType: "application/json"
  				
              }).done(function(data) {
				 
				console.log(data)
                console.log("Se ha añadido correctamente: " + data.username + " " + data.password); // imprimimos la respuesta
                username.value = null;
                password.value = null;
                
                usuRegis.setVisible(true);
                
                 username.value = null;
        		password.value = null;
                
                setTimeout(() => {
  				 usuRegis.setVisible(false);
				}, 2000);

			 }).fail(function(data){
				 
				 username.value = null;
        		password.value = null;
				 
				errorText.setVisible(true);
                
                setTimeout(() => {
  				 	errorText.setVisible(false);
				}, 2000); 
				
			 })
    	}
    		
    		function myThings(myScene){
				 
				myScene.sendToBack("LogScreen");
                myScene.start("StartScreen", {sonido: true, username:username.value});
               	myScene.get("SceneBootLoader").MiMusicaBase.play();
                
                LogThings.style.display = "none"
                document.getElementById("chat-container").style.display = "block";
                user = username.value;
                myIPchat = myIP;
                  
               
                
               	myScene.get("Victory").setIPVictoria(myIP);
                myScene.get("GameOver").setIPDerrota(myIP);

			}
			
			
			function aceptarFun() {
                
                    $.ajax({
                        method: "GET",
                
  				        url: myIP+"Usuarios/" + username.value,
  			
  				
                        processData: false,
        
                        headers: {
                            "Content-type":"application/json"
                        }
                          
                      }).done(function(data) {
                        console.log("Se ha encontrado un usuario con el nombre: "+ data.username );
                        if(data.username == username.value && data.password == password.value ){
						    console.log("Usuario y contraseña correctas");
							myThings(myScene)
						} 
						else{
							errorText.setVisible(true);
                
                			setTimeout(() => {
  				 				errorText.setVisible(false);
							}, 2000); 
						}

                        username.value = null;
        				password.value = null;
                        
                     }).fail(function(data){
						 
						 
				 
				 		errorText.setVisible(true);
                
                		setTimeout(() => {
  				 			errorText.setVisible(false);
						}, 2000); 
			 })
		}
		}
    }