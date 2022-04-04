package com.example.socialmediaapp.services;

import com.example.socialmediaapp.dto.UserDTO;
import com.example.socialmediaapp.entities.Pin;
import com.example.socialmediaapp.entities.Save;
import com.example.socialmediaapp.entities.SavePrimaryKey;
import com.example.socialmediaapp.entities.User;
import com.example.socialmediaapp.form.PinCreateFrom;
import com.example.socialmediaapp.form.SaveForm;
import com.example.socialmediaapp.repositories.IPinRepository;
import com.example.socialmediaapp.repositories.ISaveRepository;
import com.example.socialmediaapp.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PinService implements IPinService{

    @Autowired
    private IPinRepository iPinRepository;
    @Autowired
    private ISaveRepository iSaveRepository;


    @Override
    public List<Pin> getAllPin() {
        return iPinRepository.findAll();
    }

    @Override
    public Pin getPinById(int id) {
        return iPinRepository.findPinById(id);
    }

    @Override
    public void createPin(PinCreateFrom formCreate) {
        Pin pin = new Pin();
        pin.setId(formCreate.getId());
        pin.setTitle(formCreate.getTitle());
        pin.setAbout(formCreate.getAbout());
        pin.setDestination(formCreate.getDestination());
        pin.setCategory(formCreate.getCategory());
        pin.setUrl(formCreate.getUrl());
        pin.setFormat(formCreate.getFormat());
        pin.setPostedBy(new User(formCreate.getPostedBy().getIdGoogle()));
        iPinRepository.save(pin);
    }

    @Override
    public List<Pin> getPinByCategory(String category) {
        return iPinRepository.findPinByCategory(category);
    }

    @Override
    public void savePin(SaveForm saveForm) {
        iSaveRepository.save(new Save(new SavePrimaryKey(saveForm.getComposeId().getPinId(),saveForm.getComposeId().getUserLike()),
                                    new Pin(saveForm.getPinSaved().getId()),
                                    new User(saveForm.getUserLike().getIdGoogle())));
    }

    @Override
    public List<Pin> getPinsByUserLiked(String userId) {
        return iPinRepository.findPinsByUserLiked(userId);
    }


//    @Override
//    public List<Pin> getPinsByUserLiked(String id) {
//        User user = iUserRepository.findUserByIdGoogle(id);
//        Save userSave = iSaveRepository.findSavesByUserLike(user);
//        return iPinRepository.findPinBySavedUserList(userSave);
//    }
//    public void savePinUser(PinCreateFrom createFrom){
//        iPinRepository.save(new Pin())
//    }
//    getUserLikedPins(String id){
//        Pin pin = iPinRepository.findPinById();
//        User user = iUserRepository.findUserByIdGoogle(id);
//        user.getSaveList().
//    }
}
