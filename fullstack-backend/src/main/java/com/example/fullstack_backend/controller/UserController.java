package com.example.fullstack_backend.controller;

import java.util.List;
// import java.util.Optional;

// Spring imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

// Your imports
import com.example.fullstack_backend.model.User;
import com.example.fullstack_backend.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController 
{
    // Inject repository to interact with DB
    @Autowired
    private UserRepository userRepository;

    // ==================== CREATE ====================
    
    // Add new user
    @PostMapping("/user")
    User newUser(@RequestBody User newUser)
    {
        return userRepository.save(newUser);
    }

    // ==================== READ ALL ====================
    
    // Get all users
    @GetMapping("/users")
    List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    // ==================== READ BY ID ====================
    
    // Get a single user by ID
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id)
    {
        // findById returns Optional (may or may not exist)
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    // ==================== UPDATE ====================
    
    // Update existing user
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id)
    {
        return userRepository.findById(id)
                .map(user -> {
                    // Update fields
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    
                    // Save updated user
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    // ==================== DELETE ====================
    
    // Delete user by ID
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id)
    {
        if(!userRepository.existsById(id))
        {
            throw new RuntimeException("User not found with id " + id);
        }

        userRepository.deleteById(id);

        return "User with id " + id + " has been deleted successfully.";
    }
}