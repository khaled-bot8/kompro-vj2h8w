import { Component, OnInit } from '@angular/core';
import { CreateComponent } from '../../components/create/create.component'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-compromise',
  templateUrl: './compromise.page.html',
  styleUrls: ['./compromise.page.scss'],
})
export class CompromisePage implements OnInit {
  
  async openModal() {
    const modal = await this.modalController.create({
    component: CreateComponent
    });
    return await modal.present();
   }

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

}
