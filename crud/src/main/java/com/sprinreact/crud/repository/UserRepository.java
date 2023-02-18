package com.sprinreact.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sprinreact.crud.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
