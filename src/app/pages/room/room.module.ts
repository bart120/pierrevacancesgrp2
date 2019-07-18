import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomTopFiveComponent } from './room-top-five/room-top-five.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    RoomTopFiveComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    RoomTopFiveComponent
  ]
})
export class RoomModule { }
