import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private subject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    get user(): Observable<User> {
        return this.subject.asObservable();
    }

    constructor(private router: Router) {
        const u = JSON.parse(sessionStorage.getItem('USER'));
        if (u != null) {
            this.subject.next(u);
            console.log('next const');
        }
    }

    login(username: string, password: string): void {
        // appel serveur
        const u: User = { name: username, token: 'QFD45AYERGQEZ6Y5T42EZS' };
        sessionStorage.setItem('USER', JSON.stringify(u));
        this.subject.next(u);
    }

    logout(): void {
        sessionStorage.removeItem('USER');
        this.subject.next(null);
        this.router.navigate(['/home']);
    }
}
