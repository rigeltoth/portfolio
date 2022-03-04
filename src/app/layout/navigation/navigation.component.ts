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
    // this.changeNavbarColorOnScroll()
  }

  /* const classToggle = (el, ...args) => {
  args.map(e => el.classList.toggle(e))
} */

  changeNavbarColorOnScroll(){
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav')
      nav?.classList.toggle('bg-gradient-to-r', window.scrollY > 0)
      nav?.classList.toggle('from-ndg', window.scrollY > 0)
      nav?.classList.toggle('to-indigo-900', window.scrollY > 0)
      nav?.classList.toggle('opacity-95', window.scrollY > 0)
    })
  }

  toggle(){
    const menu = document.querySelector('#menu')
    menu?.classList.toggle('hidden')
  }
  autohide(){
    const menu = document.querySelector('#menu')
    menu?.classList.add("hidden")
  }
}
