import { TPipe } from '../prefs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonCardComponent } from './neon-card/neon-card.component';



@NgModule({
  declarations: [
    NeonCardComponent
  ],
  imports: [
    CommonModule,
    TPipe
  ],
  exports: [
    NeonCardComponent
  ]
})
export class ComponentsModule { }
