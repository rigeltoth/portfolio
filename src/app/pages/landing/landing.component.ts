import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  standalone: false,
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  // Facts from the CV; labels are translation keys.
  stats = [
    { value: '5+', label: 'stat.years', color: 'text-bl' },
    { value: '4', label: 'stat.airline', color: 'text-pink-500' },
    { value: '3', label: 'stat.clouds', color: 'text-grn' },
    { value: '3', label: 'stat.industries', color: 'text-prpl' },
  ]

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    })
  }

}
