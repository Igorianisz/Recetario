import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipecardComponent } from './recipecard.component';

const routes: Routes = [{ path: '', component: RecipecardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipecardRoutingModule { }
