import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NeonCardModel } from '../models/neon-card.model';

@Component({
  selector: 'app-neon-card',
  templateUrl: './neon-card.component.html',
  styleUrls: ['./neon-card.component.scss']
})
export class NeonCardComponent implements OnInit {

  @ViewChild('card') public ncard!: ElementRef
  @ViewChild('titlenc') public titlenc!: ElementRef
  @ViewChild('viewnc') public viewnc!: ElementRef

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

  constructor() { }

  ngOnInit(): void {
  }
}
