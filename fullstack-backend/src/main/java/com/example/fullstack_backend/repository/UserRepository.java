package com.example.fullstack_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.fullstack_backend.model.User;

public interface UserRepository extends JpaRepository<User,Long> 
{
    
}
