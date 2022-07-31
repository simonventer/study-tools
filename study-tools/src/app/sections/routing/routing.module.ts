import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { HomeRouterComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard';
import { ServerResolverService } from './servers/server/server-resolver.service';

const appRoutingRoutes: Routes = [
  //Redirect to /home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeRouterComponent },
  {
    //Adding canActivate to use the AuthGuard - will only be accessable if true
    path: 'servers',
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolverService } },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
    ]
  },
  {
    path: 'users', component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent }, //with the colon, anything else after the slash will load
    ]
  },
  //Redirects - END
  // { path: '404', component: PageNotFoundComponent },
  { path: '404', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '404' }, //wildcard route, catch all unknown paths
];

@NgModule({
  declarations: [
    HomeRouterComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    [
      //For Children
      RouterModule.forChild(appRoutingRoutes)
    ],
    FormsModule,
    NgbModule,
  ],
  providers: [AuthGuardService, AuthService, CanDeactivateGuard, ServerResolverService],
  exports: [RouterModule]
})
export class RoutingModule {

}