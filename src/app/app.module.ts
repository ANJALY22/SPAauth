import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
const appRoute: Routes=[
  {
    path:'',component:SigninComponent 
  },
  {
    path:'REGISTER',component:RegisterComponent
  },
  {
    path:'SIGNUP',component:SigninComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
