import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData,  } from '@ionic-native/device-motion/ngx';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // public level: number = 1;

  constructor(private deviceMotion: DeviceMotion) {}

  clicado(){
    console.log("clicado o botao");

    this.startTracking();
  }

  startTracking() {
    console.log('startTracking');
    
    this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData ) => {
      console.log('movimentou ', JSON.stringify(acceleration) );
    });
  }
  


  
}
