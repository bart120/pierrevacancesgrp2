import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListRoomComponent } from './pages/room/list-room/list-room.component';
import { CreateRoomComponent } from './pages/room/create-room/create-room.component';
import { DetailRoomComponent } from './pages/room/detail-room/detail-room.component';
import { HomeComponent } from './pages/home/home/home.component';
import { AuthenticationModule } from './pages/authentication/authentication.module';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'rooms', children: [
            { path: '', component: ListRoomComponent },
            { path: 'create', component: CreateRoomComponent },
            { path: 'detail', component: DetailRoomComponent }
        ]
    },
    { path: 'auth', loadChildren: () => AuthenticationModule }
];