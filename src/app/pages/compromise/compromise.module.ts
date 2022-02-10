import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { StatusComponent } from '../../components/status/status.component';
import { CompromisePageRoutingModule } from './compromise-routing.module';
import { CreateComponent } from '../../components/create/create.component';

import { CompromisePage } from './compromise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompromisePageRoutingModule
    
  ],
  declarations: [CompromisePage, StatusComponent, CreateComponent]
})
export class CompromisePageModule {}
