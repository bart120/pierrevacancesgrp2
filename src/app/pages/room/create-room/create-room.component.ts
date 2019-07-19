import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styles: []
})
export class CreateRoomComponent implements OnInit {

  pictures: Array<any> = [
    { id: 'Pegase.jpg', name: 'Pegase' },
    { id: 'Thalie.jpg', name: 'Thalie' },
    { id: 'Calliope.jpg', name: 'Calliope' }
  ];

  formRoom = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
    seatCount: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]*$/)
    ]),
    image: new FormControl('', [Validators.required])
  });

  constructor(private serv: RoomService, private snack: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(p): void {
    if (this.formRoom.valid) {
      const room = this.formRoom.value as RoomModel;
      //console.log(room);
      this.serv.insert(room).subscribe(
        (data) => {
          this.snack.open(
            `La salle ${data.name} a été créée avec l'id ${data.id}`,
            'OK',
            { duration: 4000, verticalPosition: 'top' });
        },
        (err) => {
          console.warn(err);
        }
      )
    }
  }
}
