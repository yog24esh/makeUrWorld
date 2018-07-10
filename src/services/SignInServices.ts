import { Injectable } from '@angular/core';
import { ConnectionServices } from './ServerConnection';
import { AlertServices } from './AlertServices';
// import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/observeOn';

@Injectable()
export class SignInServices{

    constructor(private con:ConnectionServices,
        private alertCtrl:AlertServices,private storage:Storage){

    }

    submitWithEmail(email:string,password:string){
        let info={
           
            'email':'p@p.p',
            'password':'1234567',
          
        };
        console.log(info);
        let info1=JSON.stringify(info);
        let url="http://app.makeurworld.com/log/login/login_in";
        return this.con.postData(info1,url);

    }
    submitWithPhone(phone:string,password:string)
    {
       
        let info={
           
            'phone':phone,
            'password':password,
          

        };

       
        let info1=JSON.stringify(info);
        console.log(info1);

        let url="http://app.makeurworld.com/log/login/login_in_phone";
       return this.con.postData(info1,url)

    }


  
    otpCheck(data){

   
        let url="http://app.makeurworld.com/log/login/optVerificationCheck";
       return this.con.postDataOtp(data,url)

    }


   

}