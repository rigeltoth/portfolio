import { Injectable } from '@angular/core';
import { NeonCardModel } from '../models/neon-card.model';

@Injectable({
  providedIn: 'root'
})
export class NeonCardService {

  cards: NeonCardModel[] = [
    {
      img: './assets/img/ripp.png',
      color: 'bl',
      index: 0,
      title: 'Emerging Crypto Projects',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendi eaque, exercitationem praesentium nihil.',
      animation: 'fade-right'
    },
    {
      img: './assets/img/bitcoin.png',
      color: 'pnk',
      index: 1,
      title: 'The Biggest Crypto',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendi eaque, exercitationem praesentium nihil.',
      animation: 'fade-up'
    },
    {
      img: './assets/img/ethereum.png',
      color: 'grn',
      index: 2,
      title: 'Smart Contracts',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendi eaque, exercitationem praesentium nihil.',
      animation: 'fade-left'
    },
  ]
  constructor() {}

}
