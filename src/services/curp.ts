import { Injectable } from "@angular/core";

@Injectable()
export class CurpService{
    private _gender:boolean;
    private _curp:string;
    constructor(){}
    set gender(newVal:boolean){
        this._gender=newVal;
    }
    get gender():boolean{
        return this._gender;
    }
    set curp(newVal:string){
        this._curp=newVal;
    }
    get curp():string{
        return this._curp;
    }
}