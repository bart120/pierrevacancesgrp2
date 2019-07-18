import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-top-five',
  templateUrl: './room-top-five.component.html',
  styles: []
})
export class RoomTopFiveComponent implements OnInit {

  // private servRoom: RoomService;

  rooms: Array<RoomModel>;

  constructor(private serv: RoomService) {
    // this.servRoom = serv;
  }

  ngOnInit() {
    this.serv.getTopFive().subscribe(
      (data) => {
        this.rooms = data;
      }
    );

  }

}
