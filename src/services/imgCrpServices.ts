// import { ViewChild } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AngularCropperjsComponent } from 'angular-cropperjs';
// //import { CoverPage } from '../pages/cover/cover';


// export class ImgCrpServices{
//     @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
//     cropperOptions: any;
//     croppedImage = null;
    
//     scaleValX = 1;
//     scaleValY = 1;
//     myImage:any;
//     constructor(public navCtrl: NavController, public navParams: NavParams) {}
    
//   reset() {
//     this.angularCropper.cropper.reset();
//   }
 
//   clear() {
//     this.angularCropper.cropper.clear();
//   }
 
//   rotate() {
//     this.angularCropper.cropper.rotate(90);
//   }
 
//   zoom(zoomIn: boolean) {
//     let factor = zoomIn ? 0.1 : -0.1;
//     this.angularCropper.cropper.zoom(factor);
//   }
 
//   scaleX() {
//     this.scaleValX = this.scaleValX * -1;
//     this.angularCropper.cropper.scaleX(this.scaleValX);
//   }
 
//   scaleY() {
//     this.scaleValY = this.scaleValY * -1;
//     this.angularCropper.cropper.scaleY(this.scaleValY);
//   }
 
//   move(x, y) {
//     this.angularCropper.cropper.move(x, y);
//   }
 
//   // save() {
//   //   let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
//   //   this.croppedImage = croppedImgB64String;
//   //   //code for submitting in coverPhoto
//   //   this.navCtrl.push(CoverPage,{croppedImage:this.myImage});
//   //   //code for submitting in profilePhoto
//   // }


// }