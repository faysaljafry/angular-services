import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { loggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [loggingService],
})
export class NewAccountComponent implements OnInit {
  @Output() acoountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private logService: loggingService) {}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.acoountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    this.logService.logStatusChange(accountStatus);
  }

  ngOnInit(): void {}
}
