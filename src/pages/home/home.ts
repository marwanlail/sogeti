import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalController, ViewController} from 'ionic-angular';
import {LoginPage} from  '../login/login'
import {SignupPage} from  '../signup/signup'
import {SocialLoginPage} from  '../sociallogin/sociallogin'

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
    if (key == 'showSignIn'){
      this.options[key] = !(this.options[key]);
      console.log(this.options);
      let loginModal = this.modalCtrl.create(LoginPage, this.options);
      loginModal.present();
    }
    else if (key == 'showSignUp'){
      this.options[key] = !(this.options[key]);
      console.log(this.options);
      let loginModal = this.modalCtrl.create(SignupPage, this.options);
      loginModal.present();
    }
    else if (key == 'showSocialLogIn'){
      this.options[key] = !(this.options[key]);
      console.log(this.options);
      let loginModal = this.modalCtrl.create(SocialLoginPage, this.options);
      loginModal.present();
    }

  }

}
