package com.iServer.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class UploadPostRequest {
    private String username;
    private String caption;
    private MultipartFile image; // not used (we use @RequestParam instead)
}

