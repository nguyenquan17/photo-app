package com.example.socialmediaapp.entities;

import com.example.socialmediaapp.dto.CommentDTO;
import com.example.socialmediaapp.dto.SaveDTO;
import com.example.socialmediaapp.dto.UserDTO;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Pin")
public class Pin {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "about", nullable = false)
    private String about;

    @Column(name = "destination", nullable = true)
    private String destination;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "url", nullable = false)
    private String url;

    @Column(name = "format")
    private String format;

    @ManyToOne
    @JoinColumn(name = "postedBy",nullable = false)
    private User postedBy;

    //1 pin - n comment
    @OneToMany(mappedBy = "pin")
    private List<Comment> comments;

    //1 pin - n user save
    @OneToMany(mappedBy = "pinSaved")
    private List<Save> savedUserList;

    public Pin() {
    }

    public Pin(int id, String title, String about, String destination, String category, String url, String format, User postedBy, List<Comment> comments, List<Save> savedUserList) {
        this.id = id;
        this.title = title;
        this.about = about;
        this.destination = destination;
        this.category = category;
        this.url = url;
        this.format = format;
        this.postedBy = postedBy;
        this.comments = comments;
        this.savedUserList = savedUserList;
    }

    public Pin(int id) {
        this.id = id;
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

    public User getPostedBy() {
        return postedBy;
    }

    public void setPostedBy(User postedBy) {
        this.postedBy = postedBy;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Save> getSavedUserList() {
        return savedUserList;
    }

    public void setSavedUserList(List<Save> savedUserList) {
        this.savedUserList = savedUserList;
    }
}
