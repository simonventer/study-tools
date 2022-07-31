import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  //setToActive method
  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]); //push it to the active users from the inactive users
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInActiveToActive();
  }

  //setToInactive method
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]); //push it to the inactive users from the active users
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }
}
