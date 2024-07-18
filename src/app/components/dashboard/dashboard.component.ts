import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  posts: any[] = [];

  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private postService : PostService) {
    this.authService.isAuthenticated.subscribe(status => {
      this.isAuthenticated = status;
    });
  }

  ngOnInit(): void {
    if (this.isAuthenticated) {
      this.loadPosts();
    } else {
      console.log('User is not logged in. Redirect or show message.');
      // Handle not logged in scenario, e.g., redirect to login page
    }
  }

  loadPosts() {

    // if (!token) {
    //   console.error('Token not found. Redirect or show message.');
    //   // Handle token not found scenario, e.g., redirect to login page
    //   return;
    // }

    this.postService.getAllPosts().subscribe(
      (response) => {
        this.posts = response.data;
        console.log(this.posts);
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }


}


