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
    animation: '',
    link: ''
  }

  constructor() { }

  ngOnInit(): void {
    this.cardColor()
  }

  cardColor(){
    const bgClass = "hover:ring-".concat(this.config.color)
    const textClass = "text-".concat(this.config.color)
    // console.log(textClass)
    const ringClass = "ring-".concat(this.config.color)
    // console.log(ringClass)
    const borderClass = "border-".concat(this.config.color)
    // console.log(borderClass)    
    const bg = document.getElementsByName('bg-nc')
    const title = document.getElementsByName('title-nc')
    const view = document.getElementsByName('view')


    bg[this.config.index]?.classList.toggle(bgClass)
    console.log(bgClass)
    console.log(bg)
    title[this.config.index]?.classList.toggle(textClass)
    view[this.config.index]?.classList.add(ringClass, borderClass, textClass)
  }
}
