import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ObservablesRoutingModule } from './observables-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ObservablesRoutingModule
  ],
  providers: [],
})
export class ObservablesModule { }
