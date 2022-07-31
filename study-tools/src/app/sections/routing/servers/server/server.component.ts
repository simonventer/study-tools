import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.data
    .subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    //get your id - from this activated route .snapshot from the params object
    // const id = +this.route.snapshot.params['id']; //treated as a number by adding
    // this.server = this.serversService.getServer(id);
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //     }
    //   )
  }

  onEdit(){
    //using relative path, we want to edit the current server
    //queryParamsHandling makes sure you dont lose the information you had before in your URL
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
