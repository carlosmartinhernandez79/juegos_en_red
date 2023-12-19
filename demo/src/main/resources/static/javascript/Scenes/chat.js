$(document).ready(function () {
    // Recogemos los mensajes desde el servidor
    getMessages();

    // Establecer un tiempo para actualizar el chat periodicamente
    setInterval(getMessages, 200);
});

var user = ""

var myIPchat= "";

//Función para descargar del servidor todo el chat
function getMessages() {
    $.ajax({
        type: "GET",
        url: myIPchat + "Chat/getMessages",
        success: function (data) {

            console.log(data);
            displayMessages(data);
        }
    });
}

//Función para imprimir en pantalla los mensajes
function displayMessages(messages) {
    let chatMessages = $("#chat-messages"); //Accedemos al div donde mostrar los mensajes
    chatMessages.empty(); //Vaciamos el módulo

    for (let i = 0; i < messages.length; i++) {
        chatMessages.append("<p>" + messages[i].sender + ": " + messages[i].content + "</p>");
    }
}

//Función para enviar cada mensaje
function sendMessage(){
    let messageSent = document.getElementById("input").value;
    console.log("Mensaje mandado: " + messageSent);
    
    // Creamos la nueva línea como objeto javaascript
    let newMessage= {
		sender: user,
		content: messageSent
	};
    
    //Metemos en el array el mensaje
    if (newMessage.content.trim() !== "") {
        $.ajax({
            type: "POST",
            url: myIPchat+"Chat/sendMessages",
            contentType: "application/json",
            data: JSON.stringify(newMessage),
            success: function () {
                
                newMessage = {}; //Limpiamos el objeto de envío para prepararlo para el siguiente
            }
        });
    }

    document.getElementById("input").value = "";
}
        
