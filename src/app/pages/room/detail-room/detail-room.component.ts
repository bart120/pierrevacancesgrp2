import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { Observable } from 'rxjs';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styles: []
})
export class DetailRoomComponent implements OnInit {

  $obsRoom: Observable<RoomModel>;

  constructor(private act: ActivatedRoute, private serv: RoomService) { }

  ngOnInit() {
    const id = this.act.snapshot.params.id;
    this.$obsRoom = this.serv.getRoomById(id);
  }

}
