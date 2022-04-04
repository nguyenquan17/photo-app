package com.example.socialmediaapp.dto;

import org.jetbrains.annotations.NotNull;

public class SaveDTO {
    private int id;
//    private PinDTO pinSaved;
//    private UserDTO userLike;
    private int pinSaved;
    private UserDTO userLike;

    public SaveDTO() {
    }

    public SaveDTO(int id, int pinSaved, UserDTO userLike) {
        this.id = id;
        this.pinSaved = pinSaved;
        this.userLike = userLike;
    }

    public SaveDTO(int id, int pinSaved) {
        this.id = id;
        this.pinSaved = pinSaved;
    }

    //    public SaveDTO(int id, @NotNull PinDTO pinSaved, @NotNull UserDTO userLike) {
//        this.id = id;
//        this.pinSaved = new PinDTO(pinSaved.getId());
//        this.userLike = new UserDTO(userLike.getId());
//    }

    public SaveDTO(int id) {
        this.id = id;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPinSaved() {
        return pinSaved;
    }

    public void setPinSaved(int pinSaved) {
        this.pinSaved = pinSaved;
    }

    public UserDTO getUserLike() {
        return userLike;
    }

    public void setUserLike(UserDTO userLike) {
        this.userLike = userLike;
    }

    //    public PinDTO getPinSaved() {
//        return new PinDTO(pinSaved.getId());
//    }
//
//    public void setPinSaved(@NotNull PinDTO pinSaved) {
//        this.pinSaved = new PinDTO(pinSaved.getId());
//    }
//
//    public UserDTO getUserLike() {
//        return new UserDTO(userLike.getId());
//    }
//
//    public void setUserLike(@NotNull UserDTO userLike) {
//        this.userLike = new UserDTO(userLike.getId());
//    }
}
