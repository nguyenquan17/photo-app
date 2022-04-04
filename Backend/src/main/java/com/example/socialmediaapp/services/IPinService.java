package com.example.socialmediaapp.services;


import com.example.socialmediaapp.entities.Pin;
import com.example.socialmediaapp.form.PinCreateFrom;
import com.example.socialmediaapp.form.SaveForm;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IPinService {
    public List<Pin> getAllPin();
    public Pin getPinById(int id);
    public void createPin(PinCreateFrom formCreate);
    public List<Pin> getPinByCategory(String category);
    //
    public void savePin(SaveForm saveForm);

    public List<Pin> getPinsByUserLiked(String userId);
}
