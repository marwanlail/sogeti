import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';


@Component ({
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor (public viewCtrl: ViewController) {

  }

  closeSignInModal () {
    this.viewCtrl.dismiss();
  }
}
