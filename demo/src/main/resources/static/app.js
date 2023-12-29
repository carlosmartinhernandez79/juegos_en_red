 var socket = new SockJS('/ws');
 var stompClient = Stomp.over(socket);