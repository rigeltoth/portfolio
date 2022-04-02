import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild } from '@angular/core';
import { NeonCardModel } from '../models/neon-card.model';

@Component({
  selector: 'app-neon-card',
  templateUrl: './neon-card.component.html',
  styleUrls: ['./neon-card.component.scss']
})
export class NeonCardComponent implements OnInit {

  @ViewChild('card') public ncard!: ElementRef
  @ViewChild('titlenc') public titlenc!: ElementRef

  @Input() config: NeonCardModel = {
    img: '',
    color: '',
    index: 0,
    title: '',
    body: '',
    animation: '',
    link: ''
  }

  bgClass: string = ''

  constructor(
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    this.cardColor()
  }

  cardColor(){
    this.bgClass = "hover:ring-".concat(this.config.color)
    // const textClass = "text-".concat(this.config.color)
    // const ringClass = "ring-".concat(this.config.color)
    // const borderClass = "border-".concat(this.config.color)



    
/*  const bg = document.getElementsByName('bg-nc')

    const title = document.getElementsByName('title-nc')
    const view = document.getElementsByName('view') */

    // bg[this.config.index]?.classList.add(bgClass)
    // title[this.config.index]?.classList.add(textClass)
    // view[this.config.index]?.classList.add(ringClass, borderClass, textClass)
  }
}
