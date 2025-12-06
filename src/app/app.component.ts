 import { NgFor, NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from './constant';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
 
export class AppComponent {

// uploading  Post 
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  // When file is selected using hidden input
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (!this.selectedFile) return;

    console.log("Selected file:", this.selectedFile);

    // Call upload function
    this.uploadPost("test_user", "Uploaded from mobile UI");
  }

  uploadPost(username: string, caption: string) {

    if (!this.selectedFile) {
      console.log("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("caption", caption);
    formData.append("image", this.selectedFile);

   this.http.post(API_BASE_URL + "/upload", formData)
  .subscribe({
    next: (res) => {
      console.log("API URL: " + API_BASE_URL + "/upload");
      console.log("Post Uploaded Successfully:", res);
      alert("Image Uploaded Successfully!");
    },
    error: (err) => {
      console.error("Upload Failed:", err);
      alert("Upload Failed");
    }
  });
}   

  toggleLike(post: any) {
    post.liked = !post.liked;
    post.liked ? post.likes++ : post.likes--;
  }
   
}
