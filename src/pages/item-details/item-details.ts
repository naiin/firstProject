import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ExternalApiProvider } from '../../providers/external-api/external-api';



@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
  providers: [ExternalApiProvider]


})
export class ItemDetailsPage {
  selectedItem: any;
  verb = {
    id: '',
    name: '',
    eng_name:'',
    urdu_name:''
  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public db:ExternalApiProvider
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    //console.log(navParams.get('item'));
    this.selectedItem = navParams.get('item');
    this.verb = navParams.get('item');
  }
  logForm(form) {
    console.log(form.value);
    console.log(form.value.urdu_name);
    this.db.updateData(form.value.id, form.value.name, form.value.eng_name, form.value.urdu_name);

  }

}
