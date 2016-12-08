import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { LoginPage } from  '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //
  // constructor(public navCtrl: NavController) {
  //
  // }

  constructor(public modalCtrl: ModalController) {

  }

  showLoginForm() {
    console.log('Show Login Form Clicked..');
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
  }

}
