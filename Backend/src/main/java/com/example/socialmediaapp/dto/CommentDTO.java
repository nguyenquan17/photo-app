package com.example.socialmediaapp.dto;

public class CommentDTO {
    private int id;
    private String content;
//    private PinDTO pinId;
    private UserDTO postedBy;
    private int pinId;
//    private String postedBy;

    public CommentDTO() {
    }

    public CommentDTO(int id, String content, int pinId, UserDTO postedBy) {
        this.id = id;
        this.content = content;
        this.pinId = pinId;
        this.postedBy = postedBy;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getPinId() {
        return pinId;
    }

    public void setPinId(int pinId) {
        this.pinId = pinId;
    }

    public UserDTO getPostedBy() {
        return postedBy;
    }

    public void setPostedBy(UserDTO postedBy) {
        this.postedBy = postedBy;
    }

    //    public CommentDTO(int id, String content, PinDTO pinId, UserDTO postedBy) {
//        this.id = id;
//        this.content = content;
//        this.pinId = pinId;
//        this.postedBy = postedBy;
//    }
//
//    public CommentDTO(int id) {
//        this.id = id;
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getContent() {
//        return content;
//    }
//
//    public void setContent(String content) {
//        this.content = content;
//    }
//
//    public PinDTO getPinId() {
//        return pinId;
//    }
//
//    public void setPinId(PinDTO pinId) {
//        this.pinId = pinId;
//    }
//
//    public UserDTO getPostedBy() {
//        return postedBy;
//    }
//
//    public void setPostedBy(UserDTO postedBy) {
//        this.postedBy = postedBy;
//    }
}
