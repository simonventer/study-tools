import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent{

  constructor(
    //Tells the provider which instance we want = LoggingService
    private loggingService: LoggingService,
    //Tells the provider which instance we want = AccountsService
    private accountsService: AccountsService) { 
      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert('New Status ' + status)
      );
    }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus); //pass the accountName and accountStatus
    //this.loggingService.logStatusChanged(accountStatus); //correct way by injecting the service.
  }

}
