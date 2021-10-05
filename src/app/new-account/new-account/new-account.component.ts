import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { loggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [loggingService],
})
export class NewAccountComponent {
  constructor(
    private logService: loggingService,
    private accService: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.addAccount(accountName, accountStatus);
    this.logService.logStatusChange(accountStatus);
  }
}
