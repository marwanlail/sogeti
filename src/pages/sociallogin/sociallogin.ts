import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component ({
  templateUrl: 'sociallogin.html'
})

export class SocialLoginPage {

  constructor (public viewCtrl: ViewController) {

  }

  closeSignInModal () {
    this.viewCtrl.dismiss();
  }
}
