package com.example.socialmediaapp.controller;

import com.example.socialmediaapp.dto.PinDTO;
import com.example.socialmediaapp.dto.SaveDTO;
import com.example.socialmediaapp.dto.UserDTO;
import com.example.socialmediaapp.entities.User;
import com.example.socialmediaapp.form.UserCreateForm;
import com.example.socialmediaapp.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "api/v1/user")
@CrossOrigin("*")
public class UserController {


    private final IUserService iUserService;

    public UserController(IUserService iUserService) {
        this.iUserService = iUserService;
    }

    @GetMapping(value = "id/{id}/exist")
    public ResponseEntity<?> checkExistById(@PathVariable(name = "id") String id){
        boolean checkUser = iUserService.isUserExistsById(id);
        return new ResponseEntity<>(checkUser, HttpStatus.OK);
    }

    @PostMapping(value = "create")
    public ResponseEntity<?> createUser(@RequestBody UserCreateForm userCreateForm) {
        iUserService.createUser(userCreateForm);
        return new ResponseEntity<>("Created Successfully", HttpStatus.CREATED);
    }

    @GetMapping(value = "id/{id}")
    public ResponseEntity<?> getUserById(@PathVariable(name = "id") String id){
        User user = iUserService.getUserById(id);
        UserDTO userDTO = new UserDTO(
                user.getIdGoogle(),
                user.getEmail(),
                user.getUserName(),
                user.getImageUrl(),
                user.getPinList()
                        .stream()
                            .map(pin -> new PinDTO(pin.getId(),
                                                    pin.getTitle(),
                                                    pin.getAbout(),
                                                    pin.getDestination(),
                                                    pin.getCategory(),
                                                    pin.getUrl(),
                                                    pin.getFormat(),
                                                    new UserDTO(pin.getPostedBy().getIdGoogle(),
                                                            pin.getPostedBy().getUserName(),
                                                            pin.getPostedBy().getImageUrl())


                                                    )).collect(Collectors.toList()),
                user.getSaveList()
                        .stream()
                        .map(save -> new SaveDTO(save.getId(),
                                                save.getPinSaved().getId()))

                        .collect(Collectors.toList())

        );
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }
}
