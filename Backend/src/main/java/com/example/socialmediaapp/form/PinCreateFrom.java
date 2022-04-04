package com.example.socialmediaapp.form;

import com.example.socialmediaapp.dto.UserDTO;

public class PinCreateFrom {
    private int id;
    private String title;
    private String about;
    private String destination;
    private String category;
    private String url;
    private String format;
    private UserDTO postedBy;

    public PinCreateFrom(int id, String title, String about, String destination, String category, String url, String format, UserDTO postedBy) {
        this.id = id;
        this.title = title;
        this.about = about;
        this.destination = destination;
        this.category = category;
        this.url = url;
        this.format = format;
        this.postedBy = postedBy;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public UserDTO getPostedBy() {
        return postedBy;
    }

    public void setPostedBy(UserDTO postedBy) {
        this.postedBy = postedBy;
    }
}
