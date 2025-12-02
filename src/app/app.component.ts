 import { NgFor, NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
 
export class AppComponent {

  posts = [
    {
      username: "john_doe",
      userImg: "assets/user1.jpg",
      image: "assets/post1.jpg",
      caption: "Enjoying sunset 🌅",
      liked: false,
      likes: 120
    }
  ];

  toggleLike(post: any) {
    post.liked = !post.liked;
    post.liked ? post.likes++ : post.likes--;
  }
  onFileSelected(event: any) {
  const file = event.target.files[0];
  if (!file) return;

  console.log("Selected file:", file);

  // Aage backend ya preview ke liye file yahi mil jayegi  
}
}
