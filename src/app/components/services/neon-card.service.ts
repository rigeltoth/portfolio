import { Injectable } from '@angular/core';
import { NeonCardModel } from '../models/neon-card.model';

@Injectable({
  providedIn: 'root'
})
export class NeonCardService {

  cards: NeonCardModel[] = [
    {
      img: './assets/tech/angular.svg',
      color: "bl",
      index: 0,
      title: 'Frontend',
      body: 'SPAs in Angular, React and Next.js with TypeScript: lazy loading, routing, state with RxJS, REST integrations, auth flows and responsive UI with Tailwind.',
      animation: 'fade-right',
      link: 'https://angular.dev/'
    },
    {
      img: './assets/tech/python.svg',
      color: "grn",
      index: 1,
      title: 'Backend',
      body: 'APIs with Python (FastAPI), Node.js (NestJS, Express) and Java (Spring Boot, WebFlux), backed by PostgreSQL, Redis and MongoDB, shipped with Docker and CI/CD.',
      animation: 'fade-left',
      link: 'https://fastapi.tiangolo.com/'
    },
    {
      img: './assets/tech/azure.svg',
      color: "prpl",
      index: 2,
      title: 'AI Agents & LLMs',
      body: 'Agents on Azure AI Foundry and Google ADK, vector retrieval with Qdrant, tool use and function calling, deployed on Azure, GCP and AWS.',
      animation: 'fade-right',
      link: 'https://ai.azure.com/'
    }
  ]
  constructor() {}

}
