import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeNavbarColorOnScroll()
  }

  changeNavbarColorOnScroll(){
    window.addEventListener('scroll', () => {
      var nav = document.querySelector('nav');
      nav?.classList.toggle('bg-gradient-to-r', window.scrollY > 0)
      nav?.classList.toggle('from-ndg', window.scrollY > 0)
      nav?.classList.toggle('to-indigo-900', window.scrollY > 0)
      nav?.classList.toggle('opacity-90', window.scrollY > 0)
    })
  }

}
