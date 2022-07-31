import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string }; //still recieving data from outside
  @Input() id: number; //still recieving data from outside

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {
  }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChanged(status);
    this.accountsService.statusUpdated.emit(status); //emitting the event
  }

}
