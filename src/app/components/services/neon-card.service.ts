import { Injectable } from '@angular/core';
import { NeonCardModel } from '../models/neon-card.model';

@Injectable({
  providedIn: 'root'
})
export class NeonCardService {

  cards: NeonCardModel[] = [
   
    {
      img: './assets/imgwt/ng.png',
      color: "bl",
      index: 0,
      title: 'Angular 13 CLI',
      body: 'Experience developing SPA web apps using concepts such as Lazy loading, routing, services, pipes, connecting with REST APIs - Get Post Delete Update, authorization authentication and much more',
      animation: 'fade-right',
      link: 'https://angular.io/'
    },
    {
      img: './assets/imgwt/nodejs.png',
      color: "grn",
      index: 1,
      title: 'Node Js',
      body: 'Experience in REST API backend development, using tools like Rxjs, express, json web token, middlewares, controllers, routes, babel, typescript, connecting to databases like Mongodb or MySQL and much more.',
      animation: 'fade-left',
      link: 'https://nodejs.org/'
    },
    {
      img: './assets/imgwt/github.png',
      color: "bl",
      index: 2,
      title: 'Git & GitHub',
      body: 'Experience in code versioning software and repositories, both remote and local, knowing how commit, pull, push, log and many other commands work, including GitHub Pages',
      animation: 'fade-right',
      link: 'https://git-scm.com/'
    },    
  ]
  constructor() {}

}
