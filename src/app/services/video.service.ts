import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'https://controgasto-backend.onrender.com/api/videos/search';

  constructor(private http: HttpClient) {}

  private selectedVideoUrlSubject = new BehaviorSubject<string | null>(null);
  selectedVideoUrl$ = this.selectedVideoUrlSubject.asObservable();

  setSelectedVideoUrl(url: string | null) {
    this.selectedVideoUrlSubject.next(url);
  }

  searchVideos(query: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { query });
  }
}
