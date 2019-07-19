import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { MaterialModule } from './material.module';
import { RoomModule } from './pages/room/room.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HomeModule } from './pages/home/home.module';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { RoomService } from './services/room.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';


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
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
