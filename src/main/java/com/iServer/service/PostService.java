package com.iServer.service;

import com.iServer.entity.Post;
import org.springframework.web.multipart.MultipartFile;


public interface PostService {

    Post uploadPost(String username, String caption, MultipartFile image);

}
