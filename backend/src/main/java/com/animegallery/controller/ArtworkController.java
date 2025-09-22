package com.animegallery.controller;

import com.animegallery.model.Artwork;
import com.animegallery.repository.ArtworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/artworks")
@CrossOrigin(origins = "http://localhost:3000")
public class ArtworkController {
    
    @Autowired
    private ArtworkRepository artworkRepository;
    
    @GetMapping
    public List<Artwork> getAllArtworks() {
        return artworkRepository.findAll();
    }
    
    @GetMapping("/category/{category}")
    public List<Artwork> getArtworksByCategory(@PathVariable String category) {
        return artworkRepository.findByCategory(category);
    }
    
    @GetMapping("/{id}")
    public Artwork getArtworkById(@PathVariable Long id) {
        return artworkRepository.findById(id).orElse(null);
    }
    
    @PostMapping
    public Artwork createArtwork(@RequestBody Artwork artwork) {
        return artworkRepository.save(artwork);
    }
}