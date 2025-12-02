package com.iServer.entity;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "posts")
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String caption;

    private String imageName;

    private String imageUrl;

    private LocalDateTime createdAt = LocalDateTime.now();
}
