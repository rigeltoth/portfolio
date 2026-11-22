import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  standalone: false,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  locationOptions: AnimationOptions = {
    path: './assets/lottiejson/location.json'
  }
  emailOptions: AnimationOptions = {
    path: './assets/lottiejson/email.json'
  }
  phoneOptions: AnimationOptions = {
    path: './assets/lottiejson/phone.json'
  }
  contactOptions: AnimationOptions = {
    path: './assets/lottiejson/contact.json'
  }

  Imgs = [
    {
      src: './assets/imgwt/ng.png',
      alt: 'Angular',
    }, {
      src: './assets/imgwt/nodejs.png',
      alt: 'NodeJs'
    }, {
      src: './assets/imgwt/rxjs.png',
      alt: 'RxJs'
    }, {
      src: './assets/imgwt/mdb.png',
      alt: 'MongoDB'
    }, {
      src: './assets/imgwt/typescript.png',
      alt: 'Typescript'
    }, {
      src: './assets/imgwt/git.png',
      alt: 'Git'
    }, {
      src: './assets/imgwt/github.png',
      alt: 'GitHub'
    }, {
      src: './assets/imgwt/bootstrap.png',
      alt: 'Bootstrap'
    }, {
      src: './assets/imgwt/js.png',
      alt: 'JavaScript'
    }, {
      src: './assets/imgwt/css.png',
      alt: 'CSS'
    }, {
      src: './assets/imgwt/bootswatch.png',
      alt: 'Bootswatch'
    }, {
      src: './assets/imgwt/mysql.png',
      alt: 'MySQL'
    }, {
      src: './assets/imgwt/tailwind.png',
      alt: 'TalwindCSS'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
