import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { loggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [loggingService],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  constructor(
    private logService: loggingService,
    private accService: AccountService
  ) {}

  onSetTo(status: string) {
    this.accService.updateStatus(this.id, status);
    this.logService.logStatusChange(status);
  }

  ngOnInit(): void {}
}
