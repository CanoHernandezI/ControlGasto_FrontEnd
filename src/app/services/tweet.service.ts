import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private apiUrl = 'https://controgasto-backend-1.onrender.com/api/twitter/tweets'; 
  private postTweetUrl = 'https://controgasto-backend-1.onrender.com/api/twitter/tweet';

  constructor(private http: HttpClient) {}

  getTweets(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  postTweet(status: string): Observable<any> {
    return this.http.post<any>(this.postTweetUrl, { status });
  }
}
