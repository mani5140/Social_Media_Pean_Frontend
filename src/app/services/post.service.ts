import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api/v1/posts';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('Bearer');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }


  createPost(postData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, postData, { headers: this.getHeaders() });
  }


  getAllPosts(): Observable<any> {
    console.log(this.getHeaders());
    return this.http.get(`${this.apiUrl}`, { headers: this.getHeaders() });
  }

  getPostById(postId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${postId}`, { headers: this.getHeaders() });
  }


  updatePost(postData: any, postId: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${postId}`, postData, { headers: this.getHeaders() });
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${postId}`, { headers: this.getHeaders() });
  }
}
