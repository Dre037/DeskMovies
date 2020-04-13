import { Component, OnInit, Input } from '@angular/core';
import { MoviesResult } from '../models/movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  movies: MoviesResult[];

  @Input() movieList: string;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    switch(this.movieList) {
      case 'nowPlaying':
        this.moviesService.getNowPlaying().subscribe(d => this.movies = d.results);
      break;
      case 'upcoming':
        this.moviesService.getUpComing().subscribe(d => this.movies = d.results);
        break;
      default:
        this.moviesService.getNowPlaying().subscribe(d => this.movies = d.results);
        break;
    }
  }

}
