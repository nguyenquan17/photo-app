package com.example.socialmediaapp.repositories;


import com.example.socialmediaapp.entities.Save;
import com.example.socialmediaapp.entities.SavePrimaryKey;
import com.example.socialmediaapp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ISaveRepository extends JpaRepository<Save, SavePrimaryKey> {

}
