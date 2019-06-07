import { ToastController } from 'ionic-angular';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {

   constructor(
      public toastCtrl: ToastController) {
   }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('Request', request);

      return next.handle(request).pipe(
         tap(
            () => {},
            (err: any) => {
               if (err instanceof HttpErrorResponse) {
                  console.log(err.url, err.status, err.statusText);
   
                  switch (err.status) {
                     case 400:
                     case 401:
                     case 404:
                        this.presentToast(err.error.message);
                        break;
                     default:
                        this.presentToast('Your request cannot be processed. Try again.');
                        break;
                  }
               }
   
               throw err;
            }
         ));
   }

   private presentToast(mensagem: string) {
      const toast = this.toastCtrl.create({
         message: mensagem,
         position: 'top',
         duration: 5000,
      });
      toast.present();
   }
}