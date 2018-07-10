
import { Injectable } from '@angular/core';
import { ConnectionServices } from './ServerConnection';
import { AlertServices } from './AlertServices';
// import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';




@Injectable()
export class SignUpServices{

    constructor(private con:ConnectionServices,
        private alertCtrl:AlertServices,private storage:Storage){

    }

    submitWithEmail(f_name:string,l_name:string,email:string,password:string,birthday:string,gender:string)
    {
        let info={
            'f_name':f_name,
            'l_name':l_name,
            'email':email,
            'password':password,
            'birthday':birthday,
            'gender':gender

        };
        let info1=JSON.stringify(info);

        let url="http://app.makeurworld.com/log/login/login";
        return this.con.postData(info1,url);
    }
    
    submitWithPhone(f_name:string,l_name:string,phone:string,password:string,birthday:string,gender:string)
    {
        let info={
            'f_name':f_name,
            'l_name':l_name,
            'phone':phone,
            'password':password,
            'birthday':birthday,
            'gender':gender

        };

        console.log(info);
        let info1=JSON.stringify(info);
        console.log(info1);

        let url="http://app.makeurworld.com/log/login/login_phone";
       return this.con.postData(info1,url);

    }





    otpCheckVerification(){

        console.log("i m here");

        let info={
            'loged':this.storage.get('loged'),
            'user':this.storage.get('user'),
        };
        let info1=JSON.stringify(info);
        let url="http://app.makeurworld.com/log/login/optVerificationCheck";
        this.con.postData(info1,url).subscribe(data=>{


            if(data['status'])
            {
                if(parseInt(data[0][0]['verify'])==1)
                {
                    this.storage.set('loged',data[0][0]['loged'])
                    console.log(data[0][0]['loged']);
                    return true;
                }
                else{

                   return false;
                }

            }
            else{

                this.alertCtrl.errorALert("Could not connect to server.");

            }



        },
        error=>{

            this.alertCtrl.errorALert("Could not connect to server.");


        });




    }

    otpConformation(otp:string,credit:any)
    {

        let info={'otp':otp};
        let info1=JSON.stringify(info);
        console.log(info1);
        let url="http://app.makeurworld.com/log/login/optVerificationSubmit"; 
        return this.con.postDataCredir(info1,credit,url)

    }

}