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
    { src: './assets/tech/angular.svg', alt: 'Angular' },
    { src: './assets/tech/react.svg', alt: 'React' },
    { src: './assets/tech/nextjs.svg', alt: 'Next.js' },
    { src: './assets/tech/typescript.svg', alt: 'TypeScript' },
    { src: './assets/tech/python.svg', alt: 'Python' },
    { src: './assets/tech/fastapi.svg', alt: 'FastAPI' },
    { src: './assets/tech/nodejs.svg', alt: 'Node.js' },
    { src: './assets/tech/nestjs.svg', alt: 'NestJS' },
    { src: './assets/tech/java.svg', alt: 'Java' },
    { src: './assets/tech/spring.svg', alt: 'Spring Boot' },
    { src: './assets/tech/postgresql.svg', alt: 'PostgreSQL' },
    { src: './assets/tech/redis.svg', alt: 'Redis' },
    { src: './assets/tech/mongodb.svg', alt: 'MongoDB' },
    { src: './assets/tech/docker.svg', alt: 'Docker' },
    { src: './assets/tech/azure.svg', alt: 'Azure' },
    { src: './assets/tech/googlecloud.svg', alt: 'Google Cloud' },
    { src: './assets/tech/amazonwebservices.svg', alt: 'AWS' },
    { src: './assets/tech/git.svg', alt: 'Git' },
    { src: './assets/tech/github.svg', alt: 'GitHub' },
    { src: './assets/tech/tailwindcss.svg', alt: 'Tailwind CSS' }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
