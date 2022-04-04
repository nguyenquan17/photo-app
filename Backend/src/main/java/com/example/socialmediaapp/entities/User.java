package com.example.socialmediaapp.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "User")
public class User {

    @Id
    @Column(name = "idGoogle", nullable = false, unique = true)
    private String idGoogle;


    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "username", nullable = false, unique = true)
    private String userName;

    @Column(name = "imageUrl", nullable = false, unique = true)
    private String imageUrl;

    //OneToMany Pin, 1 user - n pin
    @OneToMany(mappedBy = "postedBy")
    private List<Pin> pinList;

    //OneToMany Comment, 1 user - n comment
    @OneToMany(mappedBy = "postedBy")
    private List<Comment> commentList;

    //OneToMany Save, 1 user - n save
    @OneToMany(mappedBy = "userLike")
    private List<Save> saveList;

    public User() {
    }



    public User(String idGoogle, String userName, String imageUrl) {
        this.idGoogle = idGoogle;
        this.userName = userName;
        this.imageUrl = imageUrl;
    }

    public User(String idGoogle, String email, String userName, String imageUrl) {
        this.idGoogle = idGoogle;
        this.email = email;
        this.userName = userName;
        this.imageUrl = imageUrl;
    }

    public User(String idGoogle) {
        this.idGoogle = idGoogle;
    }


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

    public List<Pin> getPinList() {
        return pinList;
    }

    public void setPinList(List<Pin> pinList) {
        this.pinList = pinList;
    }

    public List<Comment> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }

    public List<Save> getSaveList() {
        return saveList;
    }

    public void setSaveList(List<Save> saveList) {
        this.saveList = saveList;
    }
}
