package com.example.socialmediaapp.services;

import com.example.socialmediaapp.entities.User;
import com.example.socialmediaapp.form.UserCreateForm;
import com.example.socialmediaapp.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService{

    @Autowired
    private IUserRepository iUserRepository;

    @Override
    public boolean isUserExistsById(String id) {
        return iUserRepository.existsByIdGoogle(id);
    }

    @Override
    public void createUser(UserCreateForm userCreateForm) {
        iUserRepository.save(
                new User(userCreateForm.getIdGoogle(),
                        userCreateForm.getEmail(),
                        userCreateForm.getUserName(),
                        userCreateForm.getImageUrl())
        );
    }

    @Override
    public User getUserById(String id) {
        return iUserRepository.findUserByIdGoogle(id);
    }
}
