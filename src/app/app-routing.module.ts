import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';
import { SportsComponent } from './sports/sports.component';
import { CulturalComponent } from './cultural/cultural.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'bootcamp',
    component: BootcampComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'cultural',
    component: CulturalComponent
  },
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: '**', redirectTo: 'register'}
];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutedComponents = [
  RegisterComponent,
  HomeComponent,
  ContactComponent,
  NewsComponent,
  TeamComponent,
  CulturalComponent,
  BootcampComponent,
  SportsComponent,
  GalleryComponent
];
