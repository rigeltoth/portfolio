import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
    this.changeNavbarColorOnScroll()
  }

  changeNavbarColorOnScroll(){
    window.addEventListener('scroll', () => {
      var nav = document.querySelector('nav');
      nav?.classList.toggle('opacity-5', window.scrollY > 0)
      nav?.classList.toggle('bg-gradient-to-r', window.scrollY > 0)
      nav?.classList.toggle('from-ndg', window.scrollY > 0)
      nav?.classList.toggle('to-indigo-900', window.scrollY > 0)
    })
  }
}
