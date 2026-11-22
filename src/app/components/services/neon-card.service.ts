import { Injectable } from '@angular/core';
import { NeonCardModel } from '../models/neon-card.model';

@Injectable({
  providedIn: 'root'
})
export class NeonCardService {

  cards: NeonCardModel[] = [
    {
      img: './assets/tech/angular.svg',
      color: "bl",
      index: 0,
      title: 'card.fe.title',
      body: 'card.fe.body',
      animation: 'fade-right',
      link: 'https://angular.dev/'
    },
    {
      img: './assets/tech/python.svg',
      color: "grn",
      index: 1,
      title: 'card.be.title',
      body: 'card.be.body',
      animation: 'fade-left',
      link: 'https://fastapi.tiangolo.com/'
    },
    {
      img: './assets/tech/azure.svg',
      color: "prpl",
      index: 2,
      title: 'card.ai.title',
      body: 'card.ai.body',
      animation: 'fade-right',
      link: 'https://ai.azure.com/'
    }
  ]
  constructor() {}

}
