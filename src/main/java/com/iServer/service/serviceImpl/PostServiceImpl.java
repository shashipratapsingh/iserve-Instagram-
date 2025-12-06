package com.iServer.service.serviceImpl;

import com.iServer.entity.Post;
import com.iServer.repository.PostRepository;
import com.iServer.service.PostService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    private final PostRepository repository;

    public PostServiceImpl(PostRepository repository) {
        this.repository = repository;
    }

    @Override
    public Post uploadPost(String username, String caption, MultipartFile image) {
        try {
            // 🔹 1. EXACT वही folder जहाँ file D: में रखनी है
            String uploadDir = "D:/FeProjects/mySocialMedia/iserver-img/";  // 👈 posts/ हटा दिया

            File dir = new File(uploadDir);
            if (!dir.exists()) dir.mkdirs();

            // 🔹 2. Unique file name
            String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();

            // 🔹 3. Physically save
            Path filePath = Paths.get(uploadDir + fileName);
            Files.write(filePath, image.getBytes());

            // 🔹 4. Entity build
            Post post = new Post();
            post.setUsername(username);
            post.setCaption(caption);
            post.setImageName(fileName);

            // 🔹 5. FRONTEND for public URL  (http)
            post.setImageUrl("http://localhost:8083/uploads/" + fileName);

            return repository.save(post);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Post upload failed");
        }
    }

    @Override
    public List<Post> getAllPosts() {
        return repository.findAll();
    }
}
