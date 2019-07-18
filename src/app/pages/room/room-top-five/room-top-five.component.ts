import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-top-five',
  templateUrl: './room-top-five.component.html',
  styles: []
})
export class RoomTopFiveComponent implements OnInit {

  rooms: Array<RoomModel> = [
    { name: 'Calliope', image: 'Calliope.jpg' },
    { name: 'Pegase', image: 'Pegase.jpg' },
    { name: 'Thalie', image: 'Thalie.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
