package com.example.socialmediaapp.repositories;


import com.example.socialmediaapp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, String> {
    public boolean existsByIdGoogle(String id);
    public User findUserByIdGoogle(String id);
}
