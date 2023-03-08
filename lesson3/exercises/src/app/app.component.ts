import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true

  backgroundWarning(rocketImage){

    if(this.height > 300000){
    this.color = 'orange';
    this.message = 'Almost out of here!'
    }
   

  }

  handleTakeOff(rocketImage) {
    if (this.takeOffEnabled){
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       rocketImage.style.bottom = '10px'
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = !this.takeOffEnabled
    }}
  }

 handleLand(rocketImage){
  if (!this.takeOffEnabled){
  let result = window.alert("The shuttle is landing. Landing gear engaged.");
    this.color = 'green';
    this.height = 0;
    rocketImage.style.bottom = '0px'
    this.message = "The shuttle has landed.";
    this.takeOffEnabled = !this.takeOffEnabled
  }
}

  handleAbort(rocketImage) {
    if (!this.takeOffEnabled){
    let result = window.confirm('Are you sure really want to abort the mission?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       rocketImage.style.bottom = '0px'
       this.message = 'Mission aborted.';
       this.takeOffEnabled = !this.takeOffEnabled
    }}
  }

  moveRocket(rocketImage, direction:string){
    if (!this.takeOffEnabled){
    switch(direction){
      case 'up':
        let movementU = parseInt(rocketImage.style.bottom) + 10 + 'px';
        rocketImage.style.bottom = movementU;
        this.height = this.height + 10000;
        break;
      case 'down':
        let movementD = parseInt(rocketImage.style.bottom) - 10 + 'px';
        rocketImage.style.bottom = movementD;
        this.height = this.height - 10000;
        break;
      case 'left':
        let movementL = parseInt(rocketImage.style.left) - 10 + 'px';
        rocketImage.style.left = movementL;
        this.width = this.width - 10000;
        break;
      case "right":
        let movementR = parseInt(rocketImage.style.left) + 10 + 'px';
        rocketImage.style.left = movementR;
        this.width = this.width + 10000;
        break;
    }
    }


  }

}
