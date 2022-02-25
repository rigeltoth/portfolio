import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class LayoutModule { }
