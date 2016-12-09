import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalController, ViewController} from 'ionic-angular';
import {LoginPage} from  '../login/login'

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

  options = {
    showSignUp: false,
    showSignIn: false,
    showSocialLogIn: false
  };

  showLoginForm(key) {
    this.options[key] = !(this.options[key]);
    console.log(this.options);
    let loginModal = this.modalCtrl.create(LoginPage, this.options);
    loginModal.present();
  }

}
