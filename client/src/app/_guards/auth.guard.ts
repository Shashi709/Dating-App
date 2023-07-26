import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountSerice: AccountService,  private toaster: ToastrService){}
  canActivate(): Observable<boolean> {
    return this.accountSerice.currentUser$.pipe(
      map(user=>{
        if(user) return true;
        else {
          this.toaster.error("You shall not pass");
          return false;
        }
      })
    )
  }
  
}
