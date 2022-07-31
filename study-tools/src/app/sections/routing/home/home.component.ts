import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeRouterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  //Passing queryParams and fragments programmatically
  onloadServer(id: number) {
    // this.router.navigate(['/routing/servers']);
    this.router.navigate(['/routing/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  onLogin() {
    this.authService.logIn();
    return confirm('User Logged In');
  }

  onLogout() {
    this.authService.logOut();
    return confirm('User Logged Out');
  }
}
