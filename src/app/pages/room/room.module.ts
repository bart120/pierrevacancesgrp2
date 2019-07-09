import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomTopFiveComponent } from './room-top-five/room-top-five.component';



@NgModule({
  declarations: [
    RoomTopFiveComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoomTopFiveComponent
  ]
})
export class RoomModule { }
