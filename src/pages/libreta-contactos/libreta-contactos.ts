import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoContactoPage } from '../nuevo-contacto/nuevo-contacto';
import { VerContactoPage } from '../ver-contacto/ver-contacto';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the LibretaContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libreta-contactos',
  templateUrl: 'libreta-contactos.html',
})
export class LibretaContactosPage {
  contacts$: Observable<Contact[]>;
  //contacts: Contact[] =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService:ContactService) {
  }

  ionViewWillEnter(){
    //this.contacts = this.ContactService.getContacts();

    this.contacts$ = this.ContactService.getContacts().snapshotChanges()
    .map(
      changes => {return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

  onLoadContactosPage(){
    this.navCtrl.push(NuevoContactoPage);
  }

  onItemTapped($event, contact){
    this.navCtrl.push(VerContactoPage, contact);
  }

}
