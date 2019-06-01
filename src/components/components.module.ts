import { MyApp } from './../app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CreateAccountComponent } from './create-account/create-account';
import { DashboardComponent } from './dashboard/dashboard';

@NgModule({
   declarations: [
      CreateAccountComponent,
      DashboardComponent,
   ],
   imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp)
   ],
   exports: [
      CreateAccountComponent,
      DashboardComponent,
   ],
   entryComponents: [
      DashboardComponent,
      CreateAccountComponent
   ],
})
export class ComponentsModule { }
