import { ExceptionInterceptor } from './../exception-interceptor';
import { TransactionService } from './../services/transaction.service';
import { StorageUtil } from './../util/storage-util';
import { AccountService } from './../services/account.service';
import { LoginService } from './../services/login.service';
import { ComponentsModule } from './../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
   declarations: [
      MyApp,
      HomePage,
   ],
   imports: [
      BrowserModule,
      HttpClientModule, 
      ComponentsModule,
      IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot()
   ],
   bootstrap: [
      IonicApp
   ],
   entryComponents: [
      MyApp,
      HomePage,
   ],
   providers: [
      StatusBar,
      SplashScreen,
      { provide: ErrorHandler, useClass: IonicErrorHandler },
      LoginService,
      AccountService,
      TransactionService,
      { provide: HTTP_INTERCEPTORS, useClass: ExceptionInterceptor, multi: true },
   ],
   exports: [
      StorageUtil
   ]
})
export class AppModule { }
