import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CurpService } from "../../services/curp";

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  gender:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public curpSrv:CurpService) {
    this.gender=curpSrv.gender;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
