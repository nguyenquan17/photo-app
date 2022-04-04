package com.example.socialmediaapp.controller;


import com.example.socialmediaapp.dto.CommentDTO;
import com.example.socialmediaapp.dto.PinDTO;
import com.example.socialmediaapp.dto.SaveDTO;
import com.example.socialmediaapp.dto.UserDTO;
import com.example.socialmediaapp.entities.Comment;
import com.example.socialmediaapp.entities.Pin;
import com.example.socialmediaapp.entities.Save;
import com.example.socialmediaapp.form.PinCreateFrom;
import com.example.socialmediaapp.form.SaveForm;
import com.example.socialmediaapp.services.IPinService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "api/v1/pins")
@CrossOrigin("*")
public class PinController {

    @Autowired
    private IPinService iPinService;

    @Autowired
    private ModelMapper modelMapper;

//    @GetMapping()
//    public List<PinDTO> getAllPin() {
//        List<Pin> pinListEntity = iPinService.getAllPin();
//
////        TypeMap<Pin, PinDTO> propertyMapper = modelMapper.map(Pin.class, PinDTO.class);
//        return pinListEntity.stream().map(pin -> modelMapper.map(pin, PinDTO.class)).collect(Collectors.toList());
////        PinDTO pinDTO = new PinDTO();
////        List<PinDTO> pinDTOList = pinDTO.toPinDto(pinListEntity);
////
////        return new ResponseEntity<>(pinDTOList, HttpStatus.OK);
//    }

    @GetMapping()
    public ResponseEntity<List<PinDTO>> getAllPin() {
        List<Pin> pinListEntity = iPinService.getAllPin();
        List<PinDTO> pinDTOList = new ArrayList<>();

        for (Pin entity : pinListEntity) {
            pinDTOList.add(new PinDTO(
                    entity.getId(),
                    entity.getTitle(),
                    entity.getAbout(),
                    entity.getDestination(),
                    entity.getCategory(),
                    entity.getUrl(),
                    entity.getFormat(),
                    new UserDTO(entity.getPostedBy().getIdGoogle(),
                            entity.getPostedBy().getEmail(),
                            entity.getPostedBy().getUserName(),
                            entity.getPostedBy().getImageUrl()),
                    entity.getSavedUserList()
                            .stream()
                            .map(save -> new SaveDTO(save.getId(),
                                    save.getPinSaved().getId(),
                                    new UserDTO(save.getUserLike().getIdGoogle(),
                                            save.getUserLike().getUserName(),
                                            save.getUserLike().getImageUrl())))
                            .collect(Collectors.toList()),
                    entity.getComments()
                            .stream()
                            .map(comment -> new CommentDTO(comment.getId(),
                                    comment.getContent(),
                                    comment.getPin().getId(),
                                    new UserDTO(comment.getPostedBy().getIdGoogle(),
                                            comment.getPostedBy().getUserName(),
                                            comment.getPostedBy().getImageUrl())))
                            .collect(Collectors.toList())

            ));

        }
//        List<PinDTO> pinDTOList1 = pinDTOList;
        return new ResponseEntity<>(pinDTOList, HttpStatus.OK) {
        };
//        PinDTO pinDTO = new PinDTO();
//        List<PinDTO> pinDTOList = pinDTO.toPinDto(pinListEntity);
//
//        return new ResponseEntity<>(pinDTOList, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getPinById(@PathVariable(name = "id") int id) {
        Pin entity = iPinService.getPinById(id);
        PinDTO pinDTO = new PinDTO(
                entity.getId(),
                entity.getTitle(),
                entity.getAbout(),
                entity.getDestination(),
                entity.getCategory(),
                entity.getUrl(),
                entity.getFormat(),
                new UserDTO(entity.getPostedBy().getIdGoogle(),
                        entity.getPostedBy().getEmail(),
                        entity.getPostedBy().getUserName(),
                        entity.getPostedBy().getImageUrl()),
                entity.getSavedUserList()
                        .stream()
                        .map(save -> new SaveDTO(save.getId(),
                                save.getPinSaved().getId(),
                                new UserDTO(save.getUserLike().getIdGoogle(),
                                        save.getUserLike().getUserName(),
                                        save.getUserLike().getImageUrl())))
                        .collect(Collectors.toList()),
                entity.getComments()
                        .stream()
                        .map(comment -> new CommentDTO(comment.getId(),
                                comment.getContent(),
                                comment.getPin().getId(),
                                new UserDTO(comment.getPostedBy().getIdGoogle(),
                                        comment.getPostedBy().getUserName(),
                                        comment.getPostedBy().getImageUrl())))
                        .collect(Collectors.toList()));
        return new ResponseEntity<>(pinDTO, HttpStatus.OK);
    }

    @GetMapping(value = "/category")
    public ResponseEntity<?> getPinByCategory(@RequestParam(value = "category") String category) {
        List<Pin> pinListEntityByCategory = iPinService.getPinByCategory(category);
        List<PinDTO> pinDTOListByCategory = new ArrayList<>();

        for (Pin entity : pinListEntityByCategory) {
            pinDTOListByCategory.add(new PinDTO(
                    entity.getId(),
                    entity.getTitle(),
                    entity.getAbout(),
                    entity.getDestination(),
                    entity.getCategory(),
                    entity.getUrl(),
                    entity.getFormat(),
                    new UserDTO(entity.getPostedBy().getIdGoogle(),
                            entity.getPostedBy().getEmail(),
                            entity.getPostedBy().getUserName(),
                            entity.getPostedBy().getImageUrl()),
                    entity.getSavedUserList()
                            .stream()
                            .map(save -> new SaveDTO(save.getId(),
                                    save.getPinSaved().getId(),
                                    new UserDTO(save.getUserLike().getIdGoogle(),
                                            save.getUserLike().getUserName(),
                                            save.getUserLike().getImageUrl())))
                            .collect(Collectors.toList()),
                    entity.getComments()
                            .stream()
                            .map(comment -> new CommentDTO(comment.getId(),
                                    comment.getContent(),
                                    comment.getPin().getId(),
                                    new UserDTO(comment.getPostedBy().getIdGoogle(),
                                            comment.getPostedBy().getUserName(),
                                            comment.getPostedBy().getImageUrl())))
                            .collect(Collectors.toList())

            ));

        }
//        List<PinDTO> pinDTOList1 = pinDTOList;
        return new ResponseEntity<>(pinDTOListByCategory, HttpStatus.OK);
    }

    @PostMapping(value = "/create-pin")
    public ResponseEntity<?> createPin(@RequestBody PinCreateFrom createFrom) {
        iPinService.createPin(createFrom);
        return new ResponseEntity<>("Create Successfully", HttpStatus.CREATED);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<?> savePin(@RequestBody SaveForm saveForm) {
        iPinService.savePin(saveForm);
        return new ResponseEntity<>("Create Successfully", HttpStatus.CREATED);
    }

    @GetMapping(value = "/user-like/{id}")
    public ResponseEntity<List<PinDTO>> getPinsByUserLiked(@PathVariable(name = "id") String id) {
//        List<Pin> pinListEntity = iPinService.getPinsByUserLiked(id);
//        return pinListEntity.stream().map(pin -> modelMapper.map(pin, PinDTO.class)).collect(Collectors.toList());
        List<Pin> pinListEntityByUserLike = iPinService.getPinsByUserLiked(id);
        List<PinDTO> pinDTOListUserLike = new ArrayList<>();
        for (Pin entity : pinListEntityByUserLike) {
            pinDTOListUserLike.add(new PinDTO(
                    entity.getId(),
                    entity.getTitle(),
                    entity.getAbout(),
                    entity.getDestination(),
                    entity.getCategory(),
                    entity.getUrl(),
                    entity.getFormat(),
                    new UserDTO(entity.getPostedBy().getIdGoogle(),
                            entity.getPostedBy().getEmail(),
                            entity.getPostedBy().getUserName(),
                            entity.getPostedBy().getImageUrl())


            ));

        }
//        List<PinDTO> pinDTOList1 = pinDTOList;
        return new ResponseEntity<>(pinDTOListUserLike, HttpStatus.OK);
    }
}
