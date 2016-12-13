import { Component } from '@angular/core';
import {ModalController, ViewController} from 'ionic-angular';
import {SocialLoginPage} from  '../sociallogin/sociallogin'


@Component ({
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor (public viewCtrl: ViewController, public modalCtrl: ModalController) {

  }

  closeSignInModal () {
    this.viewCtrl.dismiss();
  }

  showLoginForm(key) {
    if (key == 'showSocialLogIn'){      
      let loginModal = this.modalCtrl.create(SocialLoginPage);
      loginModal.present();
    }
  }
}
