import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: +this.route.snapshot.params['id'], //fetching Route parameters
      name: this.route.snapshot.params['name'], //fetching Route parameters
    };
    this.paramsSubscription = this.route.params
    .subscribe(
      (params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(): void {
    //this will remove the params when navigating away
    this.paramsSubscription.unsubscribe();
  }

}
