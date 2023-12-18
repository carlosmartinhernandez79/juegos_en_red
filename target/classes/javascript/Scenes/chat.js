
//Método local con array
/*let arrayMessages = [];


//Se recoge el valor del texto
let messageSent = document.getElementById("message-input").value;

let cuerpoMensaje  = [];
let mensaje= {};

cuerpoMensaje.push({ 
        "player"    : "Player 1",
        "texto"  : messageSent
    });

mensaje.cuerpoMensaje = cuerpoMensaje;*/

function sendMessage(){
    let messageSent = document.getElementById("message-input").value;
    console.log(messageSent);
    
    // Creamos la nueva línea como objeto javaascript
    let message= {
		player: "Player 1: ",
		line: messageSent
	};
    
    console.log("LINEA NUEVA: " + message);
    
    //Metemos en el array el mensaje
    fetch('http://192.168.1.62:8080/ChatBlock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            })
            .then(response => response.text())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
}
        
    //console.log("USUARIO es: " + username);
 
//Método local con array    
/*function sendMessage(){
	arrayMessages.unshift(messageSent);


/*    console.log(arrayMessages.length);
    console.log(arrayMessages);
    document.getElementById("message-input").value = "";

    //console.log( $("#message-input").value);

    displayMessages();*/

//Método local con array
/*function displayMessages(){

    $("#chat-messages").empty();
    
    for (let i = arrayMessages.length - 1; i>=0; i--){
        $("#chat-messages").append('<p>'+ arrayMessages[i] + '</p>');
    }

    
}*/