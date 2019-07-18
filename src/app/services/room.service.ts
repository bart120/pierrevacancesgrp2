import { Injectable } from '@angular/core';
import { RoomModel } from '../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    constructor(private http: HttpClient) { }

    getTopFive(): Observable<Array<RoomModel>> {

        /*this.http.get(environment.urlRooms).subscribe(
            (data) => {
                console.log(data);
            });
        return null;*/
        const obsReq = this.http.get<Array<RoomModel>>(environment.urlRooms).pipe(
            map(data => data.sort(
                (a, b) => a.name > b.name ? 1 : -1
            ).slice(0, 5)));

        return timer(0, 5000).pipe(
            mergeMap(() => obsReq)
        );

        /*return [
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Pegase', image: 'Pegase.jpg' },
            { name: 'Thalie', image: 'Thalie.jpg' }
        ];*/
    }

    getRooms(): Observable<Array<RoomModel>> {
        return this.http.get<Array<RoomModel>>(environment.urlRooms);
    }
}
