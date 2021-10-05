import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AccountService],
})
export class AppComponent {
  accounts: { name: string; status: string }[] = [];

  constructor(private accService: AccountService) {
    this.accService.statusUpdated.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }

  title = 'angular-services';

  ngOnInit() {
    this.accounts = this.accService.accounts;
  }
}
