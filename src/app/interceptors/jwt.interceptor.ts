import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private user: User;

    constructor(auth: AuthService) {
        auth.user.subscribe(data => this.user = data);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // console.log('intercept');
        // if (req.method !== 'GET') {
        if (this.user != null) {
            req = req.clone({
                setHeaders: { 'Authorization': `Bearer ${this.user.token}` }
            });
        }
        // }

        return next.handle(req);
    }
}