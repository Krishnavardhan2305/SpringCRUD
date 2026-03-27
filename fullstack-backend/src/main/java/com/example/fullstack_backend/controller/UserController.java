package com.example.fullstack_backend.controller;

import java.util.List;

// Spring imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

// Your imports
import com.example.fullstack_backend.model.User;
import com.example.fullstack_backend.repository.UserRepository;

// Marks class as REST API controller (returns JSON responses)
@RestController

// Allows frontend (React running on port 5173) to call backend APIs
@CrossOrigin("http://localhost:5173")
public class UserController 
{
    // Injects UserRepository automatically (no need to create object)
    // → Used to perform DB operations (CRUD)
    @Autowired
    private UserRepository userRepository;

    // ==================== CREATE ====================
    
    // POST /user
    // → Adds new user to database
    @PostMapping("/user")
    User newUser(@RequestBody User newUser)
    {
        // @RequestBody:
        // → Converts JSON request → Java object (User)

        // save():
        // → Inserts data into DB
        return userRepository.save(newUser);
    }

    // ==================== READ ALL ====================
    
    // GET /users
    // → Fetch all users
    @GetMapping("/users")
    List<User> getAllUsers()
    {
        // findAll():
        // → SELECT * FROM user table
        return userRepository.findAll();
    }

    // ==================== READ BY ID ====================
    
    // GET /user/{id}
    // → Fetch single user using ID
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id)
    {
        // @PathVariable:
        // → Gets value from URL (example: /user/1 → id = 1)

        // findById():
        // → returns Optional<User> (may or may not exist)

        return userRepository.findById(id)
                // If user exists → return it
                // Else → throw exception
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    // ==================== UPDATE ====================
    
    // PUT /user/{id}
    // → Update existing user
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id)
    {
        return userRepository.findById(id)
                .map(user -> {
                    // Update fields one by one
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    
                    // Save updated data (UPDATE query)
                    return userRepository.save(user);
                })
                // If user not found → throw error
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    // ==================== DELETE ====================
    
    // DELETE /user/{id}
    // → Delete user by ID
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id)
    {
        // Check if user exists
        if(!userRepository.existsById(id))
        {
            throw new RuntimeException("User not found with id " + id);
        }

        // deleteById():
        // → DELETE FROM user WHERE id=?
        userRepository.deleteById(id);

        // Return success message
        return "User with id " + id + " has been deleted successfully.";
    }
}