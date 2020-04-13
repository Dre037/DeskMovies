import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  movieState = "";
  toogleNowPlaying: boolean = true;
  toogleUpcoming: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  nowPlayingSelected() {
    this.movieState = "nowPlaying";
    this.toogleUpcoming = false;
    this.toogleNowPlaying = true;
  }

  upcomingSelected() {
    this.movieState = 'upcoming';
    this.toogleNowPlaying = false;
    this.toogleUpcoming = true;
  }

}
