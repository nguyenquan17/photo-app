package com.example.socialmediaapp.entities;

import javax.persistence.*;

@Entity
@Table(name = "Save")
public class Save {

//    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @EmbeddedId
    private SavePrimaryKey composeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("pinId")
    @JoinColumn(name = "pinId", nullable = false, insertable = false, updatable = false)
    private Pin pinSaved;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("userLike")
    @JoinColumn(name = "userLike", nullable = false,insertable = false, updatable = false)
    private User userLike;

    public Save() {
    }

    public Save(SavePrimaryKey composeId) {
        this.composeId = composeId;
    }

    public Save(Pin pinSaved, User userLike) {
        this.pinSaved = pinSaved;
        this.userLike = userLike;
    }

    public Save(SavePrimaryKey composeId, Pin pinSaved, User userLike) {
        this.composeId = composeId;
        this.pinSaved = pinSaved;
        this.userLike = userLike;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public SavePrimaryKey getComposeId() {
        return composeId;
    }

    public void setComposeId(SavePrimaryKey composeId) {
        this.composeId = composeId;
    }

    public Pin getPinSaved() {
        return pinSaved;
    }

    public void setPinSaved(Pin pinSaved) {
        this.pinSaved = pinSaved;
    }

    public User getUserLike() {
        return userLike;
    }

    public void setUserLike(User userLike) {
        this.userLike = userLike;
    }
}
