import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchViewComponent } from './search-view/search-view.component';


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'search', component: SearchViewComponent},
  {path: 'overview/:id', component: CardDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
