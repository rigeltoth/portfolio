import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  standalone: false,
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

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
