import { CommonModule } from '@angular/common';
import { TPipe } from '../prefs';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProfileComponent } from './profile/profile.component';

import { ComponentsModule } from '../components/components.module';

import { LottieComponent } from 'ngx-lottie';

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
    LottieComponent,
    TPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
