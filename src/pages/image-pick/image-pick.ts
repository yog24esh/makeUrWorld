import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,ActionSheetController, NavParams, ViewController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { BgProSetServices } from '../../services/BgProSetServices';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { ImCrpPage } from '../im-crp/im-crp';


@IonicPage()
@Component({
  selector: 'page-image-pick',
  templateUrl: 'image-pick.html',
})
export class ImagePickPage {
  imageArray:any=[];
  myImage = null;
  image:string;
  aspRatio:number;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl:ViewController,
    private credit:CreditService,
    private actionSheetController: ActionSheetController,
    public camera: Camera,
    private imgStore:BgProSetServices) {
      this.aspRatio = this.navParams.get('aspRatio');
  }
  chooseForBg(){

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
                this.navCtrl.push(ImCrpPage,{img:this.myImage,aspRatio:this.aspRatio});
                // this.navCtrl.push(ImCrpPage,{img:this.myImage,aspRatio:1}); rm aspRatio
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
              this.navCtrl.push(ImCrpPage,{img:this.myImage,aspRatio:this.aspRatio});
             // this.navCtrl.push(ImCrpPage,{img:this.myImage,aspRatio:1});
              
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
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePickPage');
    this.loadPickC();
  }



  dismissModel(){
    // console.log(15);
    this.viewCtrl.dismiss();

  }


  loadPickC()
  {
    
    this.credit.check().then(data=>{

     

      this.imgStore.bgProImg(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.imgStore.addToList(data[0][key]);
              }

              console.log(this.imgStore.getList());

              this.imageArray=this.imgStore.getList();

            }
      });
    
    });
    
  }



  choseImg(i)
  {
    console.log(this.imageArray[i].image_url);
    this.navCtrl.push(ImCrpPage,{img:this.imageArray[i].image_url,aspRatio:1})
    
  }

  

}
