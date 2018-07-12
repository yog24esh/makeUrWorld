import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio'
@IonicPage()
@Component({
  selector: 'page-musicplayer',
  templateUrl: 'musicplayer.html',
})
export class MusicplayerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeAudio:NativeAudio) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicplayerPage');
  }
  songPlay(){
  this.nativeAudio.preloadComplex('uniqueId2', 'https://r5---sn-p5qlsndd.googlevideo.com/videoplayback?clen=4472652&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,keepalive,lmt,mime,mip,mm,mn,ms,mv,pl,requiressl,source&c=WEB&ipbits=0&ei=c8NGW_jPKo_AkAOhoKWADA&pl=27&ip=104.156.245.194&keepalive=yes&id=o-ALtLIALoVg1mX_g3kwuJbZ5DY-sE910ZphYdzCHuKTEm&mime=audio%2Fmp4&itag=140&expire=1531385811&fvip=5&lmt=1523417018167625&dur=281.565&source=youtube&requiressl=yes&key=cms1&gir=yes&fexp=23709359,23745105&signature=64C3460947AF62FC1DF9E7DAAA22D44BA7E7E775.52FD58D9C56B18E973F7413A63CF649E79B6834D&ratebypass=yes&title=Luis+Fonsi+-+Despacito+ft.+Daddy+Yankee&title=Luis+Fonsi+-+Despacito+ft.+Daddy+Yankee&mip=207.244.77.49&redirect_counter=1&rm=sn-p5qe7e7e&req_id=822d28ae1318a3ee&cms_redirect=yes&ipbypass=yes&mm=31&mn=sn-p5qlsndd&ms=au&mt=1531378737&mv=m', 1, 1, 0).then(()=>{
    console.log("audio played")
  },
  (err)=>{
    console.log(err);
  });
  this.nativeAudio.play('uniqueId2', () => console.log('uniqueId1 is done playing'));
}
}
