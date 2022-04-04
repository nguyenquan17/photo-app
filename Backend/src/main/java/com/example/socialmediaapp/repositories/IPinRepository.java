package com.example.socialmediaapp.repositories;

import com.example.socialmediaapp.entities.Pin;
import com.example.socialmediaapp.entities.Save;
import com.example.socialmediaapp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


public interface IPinRepository extends JpaRepository<Pin, Integer> {
    public Pin findPinById(int id);
    public List<Pin> findPinByCategory(String category);
    public List<Pin> findPinBySavedUserList(Save save);

    @Transactional
    @Modifying
    @Query(value = "SELECT p.id, p.title, p.about, p.destination, p.category, p.url, p.format, p.postedBy FROM User u INNER JOIN Save s ON u.idGoogle = s.userLike INNER JOIN Pin p ON s.pinId = p.id where s.userLike = :userId and s.pinId = p.id", nativeQuery=true)
    List<Pin> findPinsByUserLiked(@Param("userId") String userId);
}
