import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule
  ],
  providers: [provideLottieOptions({ player: playerFactory })],
  bootstrap: [AppComponent]
})
export class AppModule { }
