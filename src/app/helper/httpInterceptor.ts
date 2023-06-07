import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../service/loader.service';
declare var $: any;
import { Router } from '@angular/router';
import { map, filter, tap } from 'rxjs/operators';
import { ModalDialogService } from '../service/modal-dialog.service';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {


    constructor( private loaderService: LoaderService,private modalDialogService: ModalDialogService,
        private router: Router) {
    }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // let currentUser = this.userInfoService.getLoggedInUser();
        var autoLoader = request.headers.get('Loader');
        if (autoLoader == 'true') {
            this.loaderService.display(true);
        }
        // if (currentUser && currentUser.Token) {
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Bearer ${currentUser.Token}`
        //         }
        //     });
        // }

        return next.handle(request).pipe(tap(event => {
            // Intercept the response and show the notification accordingly.
            if (event instanceof HttpResponse) {
                debugger
                // Check body.Message with undefined to verify the property
                // exists in returned response.
                if (event.body.Message !== undefined && event.body.Message !== '' && event.body.Message !== null) {
                    if (event.body.Success === true) {
                        this.modalDialogService.success(event.body.Message);
                    } else {
                        this.modalDialogService.error(event.body.Message);
                    }
                }
                if (autoLoader == 'true') {
                    this.loaderService.display(false);
                }

                if (event.body.Code !== undefined && event.body.Code == 401) {
                    localStorage.removeItem('Menus');
                    localStorage.removeItem('currentUser');
                    this.router.navigate(['account/login'], { queryParams: { returnUrl: this.router.url } });
                }
                if (event.body.Code !== undefined && event.body.Code == 422) {
                    // this.modalDialogService.error("Kindly mention Employee-Id");
                    this.loaderService.display(false);
                }
            }
            return event;
        }));
    }
}
