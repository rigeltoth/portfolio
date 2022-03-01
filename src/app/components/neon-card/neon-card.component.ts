import { Component, Input, OnInit } from '@angular/core';
import { NeonCardModel } from '../models/neon-card.model';

@Component({
  selector: 'app-neon-card',
  templateUrl: './neon-card.component.html',
  styleUrls: ['./neon-card.component.css']
})
export class NeonCardComponent implements OnInit {

  @Input() config: NeonCardModel = {
    img: '',
    color: '',
    index: 0,
    title: '',
    body: '',
    animation: ''
  }

  constructor() { }

  ngOnInit(): void {
    this.cardColor()
  }

  cardColor(){
    const bgClass = "hover:ring-".concat(this.config.color)
    const textClass = "text-".concat(this.config.color)
    const ringClass = "ring-".concat(this.config.color)
    const borderClass = "border-".concat(this.config.color)

    const bg = document.getElementsByName('bg-nc')
    const title = document.getElementsByName('title-nc')
    const view = document.getElementsByName('view')

    bg[this.config.index]?.classList.add(bgClass)
    title[this.config.index]?.classList.add(textClass)
    view[this.config.index]?.classList.add(ringClass, borderClass, textClass)
  }
}
