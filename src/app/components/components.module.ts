import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonCardComponent } from './neon-card/neon-card.component';



@NgModule({
  declarations: [
    NeonCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NeonCardComponent
  ]
})
export class ComponentsModule { }
