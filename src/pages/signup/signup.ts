import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';


@Component ({
  templateUrl: 'signup.html'
})

export class SignupPage {

  constructor (public viewCtrl: ViewController) {

  }

  closeSignInModal () {
    this.viewCtrl.dismiss();
  }
}
