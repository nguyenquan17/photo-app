package com.example.socialmediaapp.entities;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class SavePrimaryKey implements Serializable {
    @Column(name = "pinId", nullable = false)
    private int pinId;

    @Column(name = "userLike", nullable = false)
    private String userLike;

    public SavePrimaryKey() {
    }

    public SavePrimaryKey(int pinId, String userLike) {
        this.pinId = pinId;
        this.userLike = userLike;
    }

    public int getPinId() {
        return pinId;
    }

    public void setPinId(int pinId) {
        this.pinId = pinId;
    }

    public String getUserLike() {
        return userLike;
    }

    public void setUserLike(String userLike) {
        this.userLike = userLike;
    }
}
