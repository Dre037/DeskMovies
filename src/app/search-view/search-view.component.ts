import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { MoviesResult } from '../models/movie.model';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {

  movies : MoviesResult[];
  paramSearch : string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.paramSearch = this.route.snapshot.queryParams.query;
    this.moviesService
      .searchMovies(this.paramSearch)
      .subscribe((d) => {
        this.movies = d.results;
        console.log(this.movies);
      });
  }

}
