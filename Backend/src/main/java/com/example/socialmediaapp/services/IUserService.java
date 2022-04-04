package com.example.socialmediaapp.services;

import com.example.socialmediaapp.entities.User;
import com.example.socialmediaapp.form.UserCreateForm;


public interface IUserService {
    public boolean isUserExistsById(String id);
    public void createUser(UserCreateForm userCreateForm);

    User getUserById(String id);
}
