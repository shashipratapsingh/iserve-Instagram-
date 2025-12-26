import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/PostService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService) {}

  stories = [
    { name: "Rohit121raj", img: "assets/story1.jpg" },
    { name: "Nehas sigh", img: "assets/story2.jpg" },
    { name: "Vikas", img: "assets/story3.jpg" }
  ];

  posts: any[] = [];   // 🔥 NOW THIS WILL COME FROM BACKEND

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
  this.postService.getAllPosts().subscribe({
    next: (res: any[]) => {
      console.log("Posts from backend:", res);

     this.posts = res.map((p: any) => ({
        id: p.id,
        username: p.username,
        caption: p.caption,
        imageUrl: p.imageUrl,          // 👈 yahi backend se aa raha hai
        userImg: "assets/story1.jpg",  // DP static filhaal
        liked: false,
        likes: 0,
        comments: []
      }));
    },
    error: (err) => {
      console.error("Error loading posts:", err);
    }
  });
}


  toggleLike(post: any) {
    post.liked = !post.liked;
    post.liked ? post.likes++ : post.likes--;
  }

  showCommentModal = false;
  activePost: any = null;
  newComment = "";

  openComments(post: any) {
    this.activePost = post;
    this.showCommentModal = true;
  }

  closeComments() {
    this.showCommentModal = false;
    this.newComment = "";
  }

  addComment() {
    if (this.newComment.trim() !== "") {
      this.activePost.comments.push({
        user: "You",
        text: this.newComment
      });
      this.newComment = "";
    }
  }
}
