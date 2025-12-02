import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ REQUIRED for ngModel

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule],  // ✅ Add FormsModule here
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // -------------------------
  // STORIES
  // -------------------------
  stories = [
    { name: "Rohit", img: "assets/story1.jpg" },
    { name: "Neha", img: "assets/story2.jpg" },
    { name: "Vikas", img: "assets/story3.jpg" }
  ];

  // -------------------------
  // POSTS / FEED
  // -------------------------
  posts = [
    {
      username: "john_doe",
      userImg: "assets/user1.jpg",
      image: "assets/post1.jpg",
      caption: "Enjoying the sunset 🌅",
      liked: false,
      likes: 120,
      comments: [
        { user: "Rohit", text: "Nice 🔥" },
        { user: "Neha", text: "Beautiful shot!" }
      ]
    },
    {
      username: "Stuff",
      userImg: "assets/user2.jpg",
      image: "assets/post2.jpg",
      caption: "Beach day 🏖️",
      liked: true,
      likes: 340,
      comments: [
        { user: "Amit", text: "Awesome!" }
      ]
    }
  ];

  // -------------------------
  // LIKE / UNLIKE
  // -------------------------
  toggleLike(post: any) {
    post.liked = !post.liked;
    post.liked ? post.likes++ : post.likes--;
  }

  // -------------------------
  // COMMENT MODAL
  // -------------------------
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
