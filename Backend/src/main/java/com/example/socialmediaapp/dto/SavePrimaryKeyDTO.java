package com.example.socialmediaapp.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.lang.NonNull;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class SavePrimaryKeyDTO {
    @NonNull
    private int pinId;

    @NonNull
    private String userLike;

    public SavePrimaryKeyDTO() {
    }

    public int getPinId() {
        return pinId;
    }

    public void setPinId(int pinId) {
        this.pinId = pinId;
    }

    @NonNull
    public String getUserLike() {
        return userLike;
    }

    public void setUserLike(@NonNull String userLike) {
        this.userLike = userLike;
    }
}
