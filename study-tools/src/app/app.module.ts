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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { RecipesComponent } from './project/recipes/recipes.component';
import { RecipeListComponent } from './project/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './project/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './project/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project/shopping-list/shopping-edit/shopping-edit.component';
import { ProjectHeaderComponent } from './project/project-header/project-header.component';
import { Section5Component } from './sections/section5/section5.component';
import { CockpitComponent } from './sections/section5/cockpit/cockpit.component';
import { ServerElementComponent } from './sections/section5/server-element/server-element.component';
import { GameControlComponent } from './assignments/assignment4/game-control/game-control.component';
import { OddComponent } from './assignments/assignment4/odd/odd.component';
import { EvenComponent } from './assignments/assignment4/even/even.component';

//10. add your server component to the html file - go to app.component.html

//Adding Routing
//Should contain array of routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assignment1', component: Assignment1Component },
  { path: 'assignment2', component: Assignment2Component },
  { path: 'assignment3', component: Assignment3Component },
  { path: 'assignment4', component: Assignment4Component },
  { path: 'project', component: ProjectComponent },
  { path: 'project1', component: ProjectComponent },
  { path: 'section5', component: Section5Component },
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
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ProjectHeaderComponent,
    Section5Component,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
