import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account/account.component';
import { NewAccountComponent } from './new-account/new-account/new-account.component';
import { AccountService } from './account.service';
import { loggingService } from './logging.service';

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AccountService, loggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
