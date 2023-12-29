package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties.Websocket;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class DemoApplication implements WebSocketConfigurer{
	@Override
	public void registerWebSocketHandlers(
		WebSocketHandlerRegistry registry) {
		registry.addHandler(gameDataHandler(), "/gameData")
			.setAllowedOrigins("*");
	}
	@Bean
	public WebSocketHandler gameDataHandler() {
		return new WebSocketHandler();
	}
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
