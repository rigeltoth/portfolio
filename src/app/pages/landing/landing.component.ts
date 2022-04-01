import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  Imgs = [
    {
      src: './assets/imgLanding/appDev.jpg',
      alt: ''
    },
    {
      src: './assets/imgLanding/digitalMarketing.jpg',
      alt: ''
    },
    {
      src: './assets/imgLanding/websiteDev.jpg',
      alt: ''
    },
    {
      src: './assets/imgLanding/appDev.jpg',
      alt: ''
    },
    {
      src: './assets/imgLanding/digitalMarketing.jpg',
      alt: ''
    },
    {
      src: './assets/imgLanding/websiteDev.jpg',
      alt: ''
    },
  ]

  config: SwiperOptions = {
    loop: true,
    speed: 1000,
    grabCursor: true,
    effect: 'cube',
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    spaceBetween: 80,
    centeredSlides: true,
  }
  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
