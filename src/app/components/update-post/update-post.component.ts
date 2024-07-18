import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit{

  updateForm: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
     private postService: PostService,
      private router: Router,
      private route: ActivatedRoute
    ) {
    this.updateForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      postUrl: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.id = params['postId']
      })
  }

  onSubmit() {
    if (this.updateForm.valid) {
      console.log(this.updateForm.value)
      this.postService.updatePost(this.updateForm.value,this.id).subscribe(response => {
        console.log(response)
      }, error => {
        alert(error.error.message)
        console.error('Login failed', error.error.message);
      });
    }
    this.router.navigate(['/dashboard'])
  }
}
