package com.example.socialmediaapp.form;

import com.example.socialmediaapp.dto.PinDTO;
import com.example.socialmediaapp.dto.SavePrimaryKeyDTO;
import com.example.socialmediaapp.dto.UserDTO;
import com.example.socialmediaapp.entities.Pin;

public class SaveForm {
    private SavePrimaryKeyDTO composeId;
    private PinDTO pinSaved;
    private UserDTO userLike;

    public SaveForm() {
    }

    public SaveForm(SavePrimaryKeyDTO composeId, PinDTO pinSaved, UserDTO userLike) {
        this.composeId = composeId;
        this.pinSaved = pinSaved;
        this.userLike = userLike;
    }

    public SavePrimaryKeyDTO getComposeId() {
        return composeId;
    }

    public void setComposeId(SavePrimaryKeyDTO composeId) {
        this.composeId = composeId;
    }

    public PinDTO getPinSaved() {
        return pinSaved;
    }

    public void setPinSaved(PinDTO pinSaved) {
        this.pinSaved = pinSaved;
    }

    public UserDTO getUserLike() {
        return userLike;
    }

    public void setUserLike(UserDTO userLike) {
        this.userLike = userLike;
    }
}
