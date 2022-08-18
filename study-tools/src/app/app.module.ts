import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment1Component } from './assignments/assignment1/assignment1.component';
import { Assignment2Component } from './assignments/assignment2/assignment2.component';
import { Assignment3Component } from './assignments/assignment3/assignment3.component';
import { Assignment4Component } from './assignments/assignment4/assignment4.component';
import { Assignment5Component } from './assignments/assignment5/assignment5.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentsAndDatabindingComponent } from './sections/components-and-databinding/components-and-databinding.component';
import { CockpitComponent } from './sections/components-and-databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './sections/components-and-databinding/server-element/server-element.component';
import { GameControlComponent } from './assignments/assignment4/game-control/game-control.component';
import { OddComponent } from './assignments/assignment4/odd/odd.component';
import { EvenComponent } from './assignments/assignment4/even/even.component';
import { ProjectComponent } from './project/project.component';
import { DirectivesComponent } from './sections/directives/directives.component';
import { BasicHighlightDirective } from './sections/directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './sections/directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './sections/directives/unless/unless.directive';
import { ServicesComponent } from './sections/services/services.component';
import { NewAccountComponent } from './sections/services/new-account/new-account.component';
import { AccountComponent } from './sections/services/account/account.component';
import { AccountsService } from './sections/services/accounts.service';
import { LoggingService } from './sections/services/logging.service';
import { ActiveUsersComponent } from './assignments/assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignments/assignment5/inactive-users/inactive-users.component';
import { RoutingComponent } from './sections/routing/routing.component';
import { ObservablesComponent } from './sections/observables/observables.component';
import { AppFormsComponent } from './sections/forms/forms.component';

//10. add your server component to the html file - go to app.component.html

//Adding Routing
//Should contain array of routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assignment1', component: Assignment1Component },
  { path: 'assignment2', component: Assignment2Component },
  { path: 'assignment3', component: Assignment3Component },
  { path: 'assignment4', component: Assignment4Component },
  { path: 'assignment5', component: Assignment5Component },
  { path: 'project1', component: ProjectComponent, loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
  { path: 'components-and-databinding', component: ComponentsAndDatabindingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'services', component: ServicesComponent },
  //Routing + imporing child routes
  { path: 'routing', component: RoutingComponent, loadChildren: () => import('./sections/routing/routing.module').then(m => m.RoutingModule) },
  { path: 'observables', component: ObservablesComponent, loadChildren: () => import('./sections/observables/observables-routing.module').then(m => m.ObservablesRoutingModule) },
  { path: 'forms', component: AppFormsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //8. Add your server class here
    ServerComponent,
    ServersComponent,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    HeaderComponent,
    FooterComponent,
    ProjectComponent,
    ComponentsAndDatabindingComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ServicesComponent,
    NewAccountComponent,
    AccountComponent,
    Assignment5Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RoutingComponent,
    ObservablesComponent,
    AppFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes, {useHash: true}),
    RouterModule.forRoot(appRoutes),
    NgbModule,
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule { }
