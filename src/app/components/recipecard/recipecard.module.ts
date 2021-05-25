import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipecardRoutingModule } from './recipecard-routing.module';
import { RecipecardComponent } from './recipecard.component';


@NgModule({
  declarations: [
    RecipecardComponent
  ],
  imports: [
    CommonModule,
    RecipecardRoutingModule
  ],
  exports:[
    RecipecardComponent
  ]
})
export class RecipecardModule { }
