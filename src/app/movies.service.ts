import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MoviesResponse, MovieDetailResponse } from './models/movie.model';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  readonly url: string = 'https://api.themoviedb.org/3/';
  readonly apiKey: string = '?api_key=32b2538fae9d6a2e14d1539dde85893f&languague=pt-BR';

  constructor(private http: HttpClient, private router: Router) { }

  getNowPlaying(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${this.url}movie/now_playing/${this.apiKey}`);
  }

  searchMovies(query: string): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${this.url}search/movie${this.apiKey}&query=${query}`);
  }

  getMovieDetail(id: number): Observable<MovieDetailResponse> {
    var x = this.http.get<MovieDetailResponse>(`${this.url}movie/${id}${this.apiKey}`).pipe(
      catchError(() => of(null))
    ); 
    return x;
  }

  getUpComing(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${this.url}movie/upcoming/${this.apiKey}`);
  }
}
