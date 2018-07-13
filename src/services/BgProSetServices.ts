import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class BgProSetServices{
    imgArr=[];
    lats_time:string;

    constructor(private con:ConnectionServices){

    }

    addToList(data:any)
    {
        this.imgArr.push(data);
    }

    getList(){
        return this.imgArr;
    }

    bgProImg(user:any,loged:any){
        let url="http://app.makeurworld.com/home/image/imgGal_load_bg";

        return this.con.postDataFetch(user,loged,url);

    }




}