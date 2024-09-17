import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MainquestionComponent } from './Components/mainquestion/mainquestion.component';
import { YesPageComponent } from './Components/yes-page/yes-page.component';
import { NoPageComponent } from './Components/no-page/no-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainquestionComponent,
    YesPageComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
