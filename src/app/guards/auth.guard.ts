import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private user: User;

    constructor(auth: AuthService,
        private snack: MatSnackBar,
        private router: Router) {
        auth.user.subscribe(data => this.user = data);
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.user != null) {
            return true;
        } else {
            this.snack.open(`Vous n'avez pas accès`, 'ok', { duration: 4000, verticalPosition: 'top', horizontalPosition: 'right' });
            this.router.navigate(['/auth/login']);
            return false;
        }
    }
}
