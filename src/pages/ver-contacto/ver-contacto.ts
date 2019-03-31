import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import​ { ​Contact​ } ​ from​ ​ '../../models/contact.model'​ ;
import​ { ​ContactService​ } ​ from​ ​ '../../services/contact.service'​ ;

/**
 * Generated class for the VerContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-contacto',
  templateUrl: 'ver-contacto.html',
})
export class VerContactoPage {

  contact​ : ​ Contact​;

  constructor​ (public​ ​ navCtrl​: ​ NavController​ , ​ public​ ​ navParams​ : ​ NavParams​ , ​ private contactService​ : ​ ContactService​ ) {
    this​.contact​ = ​ this​.navParams​.data​;
    console​.log​(this​.contact​.key​);
  }

  onUpdateContact(value:Contact){
    this.contactService.updateContact(value);
    this.navCtrl.pop();
  }

  onRemoveContact(value:Contact){
    this.contactService.removeContact(value);
    this.navCtrl.pop();
  }

}
