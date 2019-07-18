import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styles: []
})
export class ListRoomComponent implements OnInit {

  rooms: Array<RoomModel>;
  cols: Array<string> = ['action', 'name', 'price', 'seat'];

  constructor(private serv: RoomService) { }

  ngOnInit() {
    this.serv.getRooms().subscribe(
      data => this.rooms = data
    );
  }

}
