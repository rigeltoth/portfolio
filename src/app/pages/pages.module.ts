import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProfileComponent } from './profile/profile.component';

import { ComponentsModule } from '../components/components.module';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    NgxUsefulSwiperModule,
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class PagesModule { }
