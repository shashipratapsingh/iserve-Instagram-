package com.iServer.controller;

import com.iServer.entity.Post;
import com.iServer.service.PostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/iserver/v1")
public class UploadPostController {

    private final PostService postService;

    public UploadPostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/upload")
    public ResponseEntity<Post> uploadPost(
            @RequestParam("username") String username,
            @RequestParam("caption") String caption,
            @RequestParam("image") MultipartFile image
    ) {
        Post saved = postService.uploadPost(username, caption, image);
        return ResponseEntity.ok(saved);
    }


    @GetMapping("/getPost")
    public ResponseEntity<?> getAllPosts() {
        List<Post> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }
}
