import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  accounts: {name: string, status: string}[] = []; //we want a array of accounts, initially it is empty
  
  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
  

}
