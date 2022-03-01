import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { NeonCardModel } from 'src/app/components/models/neon-card.model';
import { NeonCardService } from 'src/app/components/services/neon-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: NeonCardModel[] = []
  constructor(private neonCardService: NeonCardService) { }

  ngOnInit(): void {
    this.getCards()
    AOS.init()
  }
  getCards(){
    this.cards = this.neonCardService.cards
  }
}
