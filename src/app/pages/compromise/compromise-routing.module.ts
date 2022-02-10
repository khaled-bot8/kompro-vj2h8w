import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompromisePage } from './compromise.page';

const routes: Routes = [
  {
    path: '',
    component: CompromisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompromisePageRoutingModule {}
