import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeNavbarColorOnScroll()
  }

  changeNavbarColorOnScroll(){
    window.addEventListener('scroll', () => {
      var nav = document.querySelector('nav');
      nav?.classList.toggle('bg-indigo-900', window.scrollY > 0)
    })
  }
}
