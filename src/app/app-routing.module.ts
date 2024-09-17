import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainquestionComponent } from './Components/mainquestion/mainquestion.component';
import { YesPageComponent } from './Components/yes-page/yes-page.component';
import { NoPageComponent } from './Components/no-page/no-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'main-question', component: MainquestionComponent },
  { path: 'yes', component: YesPageComponent },
  { path: 'no', component: NoPageComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
