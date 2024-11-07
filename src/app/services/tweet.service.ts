import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private apiUrl = 'https://controgasto-backend.onrender.com/api/twitter/tweets'; // URL de tu API

  constructor(private http: HttpClient) {}

  getTweets(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
