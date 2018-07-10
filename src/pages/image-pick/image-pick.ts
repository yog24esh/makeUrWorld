import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { BgProSetServices } from '../../services/BgProSetServices';



@IonicPage()
@Component({
  selector: 'page-image-pick',
  templateUrl: 'image-pick.html',
})
export class ImagePickPage {
  imageArray:any=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl:ViewController,
    private credit:CreditService,
    private imgStore:BgProSetServices) {
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
    
    console.log(this.imageArray[i]);
  }

  

}
