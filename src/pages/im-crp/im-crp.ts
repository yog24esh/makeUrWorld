import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularCropperjsComponent } from 'angular-cropperjs';
import { CoverPage } from '../cover/cover';
//import { ImgCrpServices } from '../../services/imgCrpServices';


@IonicPage()
@Component({
  selector: 'page-im-crp',
  templateUrl: 'im-crp.html',
})
export class ImCrpPage {
  @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
  cropperOptions: any;
  croppedImage = null;
  
  
  scaleValX = 1;
  scaleValY = 1;
 
  myImage:any;
  aspRatio:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myImage = this.navParams.get('img');
    this.aspRatio = this.navParams.get('aspRatio');
    this.cropperOptions = {
      dragMode: 'crop',
      aspectRatio: this.aspRatio,
      autoCrop: true,
      movable: true,
      zoomable: true,
      scalable: true,
      autoCropArea: 0.8,
    };
}

     
  reset() {
    this.angularCropper.cropper.reset();
  }
 
  clear() {
    this.angularCropper.cropper.clear();
  }
 
  rotate() {
    this.angularCropper.cropper.rotate(90);
  }
 
  zoom(zoomIn: boolean) {
    let factor = zoomIn ? 0.1 : -0.1;
    this.angularCropper.cropper.zoom(factor);
  }
 
  scaleX() {
    this.scaleValX = this.scaleValX * -1;
    this.angularCropper.cropper.scaleX(this.scaleValX);
  }
 
  scaleY() {
    this.scaleValY = this.scaleValY * -1;
    this.angularCropper.cropper.scaleY(this.scaleValY);
  }
 
  move(x, y) {
    this.angularCropper.cropper.move(x, y);
  }
 
  save() {
    let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    this.croppedImage = croppedImgB64String;
    //code for submitting in coverPhoto
    this.navCtrl.push(CoverPage,{croppedImage:this.myImage});
    console.log("back to page");
    //code for submitting in profilePhoto
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ImCrpPage');
  }
  

}
