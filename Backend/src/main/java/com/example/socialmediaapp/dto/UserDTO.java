package com.example.socialmediaapp.dto;

import com.example.socialmediaapp.entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.jetbrains.annotations.NotNull;

import java.util.List;

public class UserDTO {
    private String idGoogle;

    @JsonInclude(JsonInclude.Include.NON_NULL)
//    @JsonIgnore
    private String email;

    private String userName;

    private String imageUrl;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<PinDTO> listCreated;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<SaveDTO> listLiked;

    public UserDTO() {
    }
//
    public UserDTO(String idGoogle, String userName, String imageUrl) {
        this.idGoogle = idGoogle;
        this.userName = userName;
        this.imageUrl = imageUrl;
    }

    public UserDTO(String idGoogle, String email, String userName, String imageUrl) {
        this.idGoogle = idGoogle;
        this.email = email;
        this.userName = userName;
        this.imageUrl = imageUrl;
    }

    public UserDTO(String idGoogle, String email, String userName, String imageUrl, List<PinDTO> listCreated, List<SaveDTO> listLiked) {
        this.idGoogle = idGoogle;
        this.email = email;
        this.userName = userName;
        this.imageUrl = imageUrl;
        this.listCreated = listCreated;
        this.listLiked = listLiked;
    }

//    public UserDTO(int id) {
//        this.id = id;
//    }


    public String getIdGoogle() {
        return idGoogle;
    }

    public void setIdGoogle(String idGoogle) {
        this.idGoogle = idGoogle;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public List<PinDTO> getListCreated() {
        return listCreated;
    }

    public void setListCreated(List<PinDTO> listCreated) {
        this.listCreated = listCreated;
    }

    public List<SaveDTO> getListLiked() {
        return listLiked;
    }

    public void setListLiked(List<SaveDTO> listLiked) {
        this.listLiked = listLiked;
    }

    public User toEntity() {
        return new User(idGoogle, email, userName, imageUrl);
    }
}
