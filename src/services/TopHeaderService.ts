
import { Injectable } from '@angular/core';
import { ConnectionServices } from './ServerConnection';
import { AlertServices } from './AlertServices';
// import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';

// top header request..................



@Injectable()
export class TopHeaderServices{

    constructor(private con:ConnectionServices,
        private alertCtrl:AlertServices,private storage:Storage){

    }

    notificationLoad(user:any,loged:any){

        let url="http://app.makeurworld.com/home/main/notifi_load";

       return this.con.postDataFetch(user,loged,url);


    }
    messageLaod(user:any,loged:any){

        let url="http://app.makeurworld.com/home/main/nw_mess_l";

       return this.con.postDataFetch(user,loged,url);


    }
    requestLoad(user:any,loged:any){

        let url="http://app.makeurworld.com/home/main/meme_req_list";

       return this.con.postDataFetch(user,loged,url);


    }

    searchLoad(user:any,loged:any,info:any)
    {
        let url="http://app.makeurworld.com/home/main/search_op";

        return this.con.postDataAsked(user,loged,info,url);

    }
}
