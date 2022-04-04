package com.example.socialmediaapp.form;

public class UserCreateForm {
    private String idGoogle;
    private String email;
    private String userName;
    private String imageUrl;

    public UserCreateForm() {
    }

    public UserCreateForm(String idGoogle, String email, String userName, String imageUrl) {
        this.idGoogle = idGoogle;
        this.email = email;
        this.userName = userName;
        this.imageUrl = imageUrl;
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
}
