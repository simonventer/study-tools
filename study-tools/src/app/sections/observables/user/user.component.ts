import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private _route: ActivatedRoute, private _userService: UserService) {
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.id = params['id'];
      }
    });
  }

  onActivate() {
    // this._userService.activatedEmitter.emit(true);
    this._userService.activatedEmitter.next(true);
  }

}
