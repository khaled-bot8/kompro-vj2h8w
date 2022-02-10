import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})




export class CreateComponent implements OnInit {

  
  

   async openModal() {
    const modal = await this.modalController.create({
    component: CreateComponent
    });
    return await modal.present();
   }

   dismiss() {
    this.viewCtrl.dismiss();
    }

   
  constructor( public modalController: ModalController, public viewCtrl: ModalController ) { 
    

    
  }

  ngOnInit() {


  }
  
}

