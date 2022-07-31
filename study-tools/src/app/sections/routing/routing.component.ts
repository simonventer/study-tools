import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  //Navigate Programmatically
  onloadServers() {
    //complex calculation
    this.router.navigate(['/routing/servers']);
  }

  //Navigate Programmatically using Relative Paths
  onReload() {
    this.router.navigate(['../routing'], { relativeTo: this.route });
  }
}
