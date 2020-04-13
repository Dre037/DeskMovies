import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieDetailResponse } from '../models/movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  movie: MovieDetailResponse;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.moviesService
      .getMovieDetail(+this.route.snapshot.paramMap.get('id'))
      .subscribe((d) => {
        if (d) {
          this.movie = d;
          console.log(this.movie);
        } else {
          this.router.navigate(['**']);
        }
      });
  }
}
