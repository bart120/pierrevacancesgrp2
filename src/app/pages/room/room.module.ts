import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomTopFiveComponent } from './room-top-five/room-top-five.component';
import { MaterialModule } from 'src/app/material.module';
import { CreateRoomComponent } from './create-room/create-room.component';
import { DetailRoomComponent } from './detail-room/detail-room.component';
import { ListRoomComponent } from './list-room/list-room.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RoomTopFiveComponent,
    CreateRoomComponent,
    DetailRoomComponent,
    ListRoomComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    RoomTopFiveComponent
  ]
})
export class RoomModule { }
