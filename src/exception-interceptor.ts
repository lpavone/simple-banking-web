import { ToastController } from 'ionic-angular';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {

   constructor(
      public toastCtrl: ToastController) {
   }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('Request', request);

      return next.handle(request)
         .pipe(catchError((error: any) => {
            if (error instanceof HttpErrorResponse) {
               console.log(error.url, error.status, error.statusText);

               switch (error.status) {
                  case 400:
                  case 401:
                  case 404:
                     this.presentToast(error.error.message);
                     break;
                  default:
                     this.presentToast('Your request cannot be processed. Try again.');
                     break;
               }
            }

            throw error;
         }));
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