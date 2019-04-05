import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { first,map } from 'rxjs/operators';
import { log } from 'util';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router:Router, public afAuth:AngularFireAuth){

    }

     canActivate (): Observable<boolean>{
         return this.afAuth.authState.pipe(map(auth => {
            if (!auth) {
                this.router.navigate(['/login']);
                console.log('flase')
                return false;
            } else {
                console.log('trrue')
                return true;
            }
         }));
     
         
         
        

        
    }
}