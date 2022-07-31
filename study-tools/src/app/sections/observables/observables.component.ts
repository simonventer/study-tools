import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.activatedSub = this._userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }

  //You have to unsubscribe from Subjects if you dont use it anymore
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

}
