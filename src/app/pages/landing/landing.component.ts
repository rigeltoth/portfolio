import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import * as AOS from 'aos';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  Imgs = [
    {
     src: './assets/imgwt/typescript.png',
     alt: 'Typescript'
   },
    {
     src: './assets/imgwt/typescript.png',
     alt: 'Typescript'
   },
    {
     src: './assets/imgwt/typescript.png',
     alt: 'Typescript'
   },
      {
      src: './assets/imgwt/typescript.png',
      alt: 'Typescript'
    },
  ]
  constructor() { }

  config: SwiperOptions = {
    loop: true,
    speed: 500,
    grabCursor: true,
    effect: 'cube',
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    spaceBetween: 80,
    centeredSlides: true,
    slidesPerView: 'auto',
  }

  ngOnInit(): void {
    AOS.init()
  }

}
