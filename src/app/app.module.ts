import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RoomModule } from './pages/room/room.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HomeModule } from './pages/home/home.module';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { RoomService } from './services/room.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
    HomeModule,
    RoomModule,
    AuthenticationModule,
    HttpClientModule
  ],
  providers: [
    //RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
