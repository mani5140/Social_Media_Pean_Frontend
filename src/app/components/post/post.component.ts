import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: any;


  constructor(private postService : PostService,
    private route: ActivatedRoute,
    private router: Router
  ){}


  updatePost(post:any){
    this.router.navigate(['/update'],{
      relativeTo: this.route,
      queryParams: {postId: post.id},
      queryParamsHandling: 'merge'
    })
  }

  deletePost(post:any){
    this.postService.deletePost(post.id).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
