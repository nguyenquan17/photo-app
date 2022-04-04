package com.example.socialmediaapp.dto;

import com.example.socialmediaapp.entities.Comment;
import com.example.socialmediaapp.entities.Pin;
import com.example.socialmediaapp.entities.Save;
import com.example.socialmediaapp.entities.User;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;

public class PinDTO {
    private int id;
    private String title;
    private String about;
    private String destination;
    private String category;
    private String url;
    private String format;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private UserDTO postedBy;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<SaveDTO> savedUserList;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<CommentDTO> comments;


    public PinDTO() {
    }

    public PinDTO(int id) {
        this.id = id;
    }

    public PinDTO(int id, String title, String about, String destination, String category, String url, String format, UserDTO postedBy, List<SaveDTO> savedUserList, List<CommentDTO> comments) {
        this.id = id;
        this.title = title;
        this.about = about;
        this.destination = destination;
        this.category = category;
        this.url = url;
        this.format = format;
        this.postedBy = postedBy;
        this.savedUserList = savedUserList;
        this.comments = comments;
    }

    public PinDTO(int id, String title, String about, String destination, String category, String url, String format, UserDTO postedBy) {
        this.id = id;
        this.title = title;
        this.about = about;
        this.destination = destination;
        this.category = category;
        this.url = url;
        this.format = format;
        this.postedBy = postedBy;
    }

    public PinDTO(int id, String title, String about, String destination, String category, String url, String format) {
        this.id = id;
        this.title = title;
        this.about = about;
        this.destination = destination;
        this.category = category;
        this.url = url;
        this.format = format;
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

    public List<SaveDTO> getSavedUserList() {
        return savedUserList;
    }

    public void setSavedUserList(List<SaveDTO> savedUserList) {
        this.savedUserList = savedUserList;
    }

    public List<CommentDTO> getComments() {
        return comments;
    }

    public void setComments(List<CommentDTO> comments) {
        this.comments = comments;
    }

    //    public PinDTO convertToDto(Pin entity){
//        PinDTO pinDTO =
//    }
//    public PinDTO toPinDto(Pin entity) {
//        PinDTO pinDTO = new PinDTO();
//        pinDTO.setId(entity.getId());
//        pinDTO.setTitle(entity.getTitle());
//        pinDTO.setAbout(entity.getAbout());
//        pinDTO.setDestination(entity.getDestination());
//        pinDTO.setCategory(entity.getCategory());
//        pinDTO.setImage(entity.getImage());
//        pinDTO.setPostedBy(new UserDTO(entity.getPostedBy().getId(),
//                                    entity.getPostedBy().getIdGoogle(),
//                                    entity.getPostedBy().getEmail(),
//                                    entity.getPostedBy().getUserName(),
//                                    entity.getPostedBy().getImageUrl()));
//        pinDTO.setSaveList(entity.getSavedUserList());
//        pinDTO.setCommentList(entity.getComments());
//
//        return pinDTO;
//    }



//    public Pin toEntity() {
//        return new Pin(id, title, about, destination, category, image ,postedBy, saveList, commentList );
//    }
}
