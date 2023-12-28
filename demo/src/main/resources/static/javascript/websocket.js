const stompClient = Stomp.over(new SockJS('/ws')); // Crea el cliente WebSocket

export { stompClient }; // Exporta el cliente WebSocket para usarlo en otros archivos