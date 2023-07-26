import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelReister = new EventEmitter();
  model: any = {};

  constructor(private accountService:AccountService, private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => {
        this.toaster.error(error.error);
        console.log(error);
      }
    })
  }
  cancel() {
    this.cancelReister.emit(false);
  }

}
