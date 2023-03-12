import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  series = [
    {
      url: 'https://www.netflix.com/title/80189221',
      name: 'The Haunting of Hill House',
      contentType: 'TVSeries',
      description:
        'Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.',
      contentRating: '18+',
      genre: 'TV Mysteries',
      poster:
        'https://occ-0-1492-1007.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXWSCy7mTvNQ4R_mRaos7N9eqE0Oz4rflqohffwToR5eHOxjTH3sZFanOs6uvTJUwGMRV92DolxC9Uj3tB74I8O99MS3.jpg?r=153',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
