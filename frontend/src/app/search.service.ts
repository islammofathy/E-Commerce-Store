import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'http://localhost:4200/api/search';  // Backend API URL

  constructor(private http: HttpClient) {}

  searchProducts(query: string, category?: string): Observable<any> {
    let params = new HttpParams().set('query', query);
    
    if (category) {
      params = params.set('category', category);
    }

    return this.http.get<any[]>(this.apiUrl, { params });
  }
}

