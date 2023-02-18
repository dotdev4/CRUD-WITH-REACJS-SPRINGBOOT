package com.sprinreact.crud.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not find user " + id);
    }
}