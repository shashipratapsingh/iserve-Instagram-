package com.iServer.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class ResourceConfig implements WebMvcConfigurer {
    @Value("${file.upload.dir}")
    private String uploadDir;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // URL: /uploads/**  ->  Disk: D:/FeProjects/mySocialMedia/iserver-img/
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:"+uploadDir);
    }
}