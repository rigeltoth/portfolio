import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxUsefulSwiperModule
  ]
})
export class PagesModule { }
