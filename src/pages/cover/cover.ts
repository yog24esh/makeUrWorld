import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, ModalController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { AlertServices } from '../../services/AlertServices';
import * as crop from "croppie";
import { ImagePickPage } from '../image-pick/image-pick';
import { ImCrpPage } from '../im-crp/im-crp';

@IonicPage()
@Component({
  selector: 'page-cover',
  templateUrl: 'cover.html',
})
export class CoverPage {
  myImage = null;
  image:string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private actionSheetController: ActionSheetController,
    public camera: Camera,
    private toastCtrl: ToastController,
    private altCtrl:AlertServices,
    private modelCtr:ModalController
    
  ) {
    this.image = this.navParams.get("croppedImage")==null?"assets/imgs/ter2.jpg":this.navParams.get("croppedImage");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CoverPage');
  }

  choseForBg(){
    this.navCtrl.push(ImCrpPage);
    const actionsheet = this.actionSheetController.create({
      title:"Add Cover Page Photo",
      buttons: [
        {
          text:"From Storage",
          handler: ()=> {
      
            const options: CameraOptions={
              quality:100,
              destinationType:this.camera.DestinationType.DATA_URL,
              encodingType:this.camera.EncodingType.JPEG,
              sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
              mediaType:this.camera.MediaType.PICTURE,
              correctOrientation:true,
              saveToPhotoAlbum:true
            }
              this.camera.getPicture(options).then((imageData)=>{
                this.myImage = 'data:image/jpeg;base64,' + imageData;
                this.navCtrl.push(ImCrpPage,{img:this.myImage});
                //toast fior successful upload
              },(err)=>{
                //toast for unsses upload
              });
              
            }
        },
        {
          text:"Open Camera",
          handler: ()=> {
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              sourceType: this.camera.PictureSourceType.CAMERA
            }
         
            this.camera.getPicture(options).then((imageData) => {
              this.myImage = 'data:image/jpeg;base64,' + imageData;
              this.navCtrl.push(ImCrpPage,{img:this.myImage});
              //toast for successfull upload
            },(err)=>{
              //toast of unsuccessfull upload
            });
          }
          
        },
        {
          text:'Cancel',
          role:'cancel'
        }
      ]
    }) ;
   
    actionsheet.present();

    // var el = document.getElementById('vanilla-demo');
    // var vanilla = new crop.Croppie(el, {
    //     viewport: { width: 100, height: 100 },
    //     boundary: { width: 300, height: 300 },
    //     showZoomer: false,
    //     enableOrientation: true
    // });
    // vanilla.bind({
    //     url: 'assets/imgs/ter1.jpg',
    //     orientation: 4
    // });
  }
  

  choseForPr(){
    const profilePick=this.modelCtr.create(ImagePickPage);
    profilePick.present();
  }

}//class end
