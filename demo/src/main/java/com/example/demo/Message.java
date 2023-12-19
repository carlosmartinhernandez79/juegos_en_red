package com.example.demo;

public class Message {
    private String sender;
    private String content;

    // Constructors, getters, and setters
    public Message(){
        sender = null;
        content = null;
    }

    public Message(String a, String b){
        sender = a;
        content = b;
    }

    public String getSender(){
        return this.sender;
    }

    public String getContent(){
        return this.content;
    }

    public void setSender(String c){
        this.sender = c;
    }

    public void setContent(String d){
        this.content = d;
    }

    public String getMessage(){
        return sender + ": " + content;
    }
}