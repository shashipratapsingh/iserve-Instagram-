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

@Service
public class PostServiceImpl implements PostService {

    private final PostRepository repository;

    public PostServiceImpl(PostRepository repository) {
        this.repository = repository;
    }

    @Override
    public Post uploadPost(String username, String caption, MultipartFile image) {
        try {
            // 1. Create folder if not exists
            String uploadDir = "uploads/posts/";
            File dir = new File(uploadDir);
            if (!dir.exists()) dir.mkdirs();

            // 2. Unique filename
            String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();

            // 3. Save file physically
            Path filePath = Paths.get(uploadDir + fileName);
            Files.write(filePath, image.getBytes());

            // 4. Build entity
            Post post = new Post();
            post.setUsername(username);
            post.setCaption(caption);
            post.setImageName(fileName);
            post.setImageUrl("http://localhost:8080/" + uploadDir + fileName);

            // 5. Save to DB
            return repository.save(post);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Post upload failed");
        }
    }
}
