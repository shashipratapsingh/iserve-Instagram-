import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any> {
    return this.http.get(API_BASE_URL + "/getPost");
  }
}
