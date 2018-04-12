import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CurpService } from "../../services/curp";
import { ResultPage } from "../../pages/result/result";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public curp:string;
  
  constructor(public navCtrl: NavController, public curpSrv:CurpService) {  
    this.curp="";
  }

  gender():void{
    if(this.curp[10] == 'H'){
      this.curpSrv.gender=true;
      this.navCtrl.push(ResultPage);
    }
    else {
      this.curpSrv.gender=false;
      this.navCtrl.push(ResultPage);
    }
  }

}
