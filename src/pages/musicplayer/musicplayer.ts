import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { StreamingMedia,StreamingAudioOptions } from '../../../node_modules/@ionic-native/streaming-media';
//import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

 
@IonicPage()
@Component({
  selector: 'page-musicplayer',
  templateUrl: 'musicplayer.html',
})
export class MusicplayerPage {
  songs = ['http://media.makeurworld.com/store/music_p/35541602555a4691e3d230f.mp3'];
  poster = [];
  file1:MediaObject;
  play:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private streamingMedia:StreamingMedia,private media: Media,private file:File) {
    
   
    // this.file1.play();

// pause the file


 
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicplayerPage');
    this.file1= this.media.create(this.songs[0]);
    console.log(this.file1);
   
    this.file1.onStatusUpdate.subscribe(status => {
     
        if(status==1)
        {
          this.duration();
          let duration = this.file1.getDuration();
          console.log(duration);
        }
        if(status==2)
        {
          this.play=true;
        }
        if(status==3){
          this.play=false;
        }
        console.log(this.play);
    }); // fires when file status changes
    this.file1.onSuccess.subscribe(() => console.log('Play next song'));
    this.file1.onError.subscribe(error => console.log('Error!', error));  
  }

 

  playSong(){
      // this.file1.onStatusUpdate.subscribe(status => console.log(status));
      // console.log(this.play);
      this.file1.play();
      this.play=false;
  }

  pauseSong()
  {
    // console.log(this.play);
    this.file1.pause();
    this.play=true;
  }

  duration(){

    // console.log(5);
    setTimeout(function(){
     
      console.log(15);
      this.duration();

    },500);

  }


  // pre(){

  //   this.file1.play();
  //   // console.log(15);

  // }

  


}
