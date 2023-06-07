import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { ModalDialogService } from 'src/app/service/modal-dialog.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  isError: boolean = false;
  errorMessage: string = '';
  isSuccess: boolean = false;
  successMessage: string = '';
  errorSubject: Subject<any> = new Subject();
  successSubject: Subject<any> = new Subject();

  @ViewChild('messageDiv', { static: false }) messageDiv: ElementRef;

  constructor(private modelDialogService: ModalDialogService) { }

  ngOnInit() {

    this.modelDialogService.alertError().subscribe((res: any) => {
      this.isError = true;
      this.messageDiv.nativeElement.scrollIntoView();
      this.errorMessage = res['text'];
      // this.errorSubject.next();
    });
    this.modelDialogService.alertSuccess().subscribe((res: any) => {
      this.isSuccess = true;
      this.messageDiv.nativeElement.scrollIntoView();
      this.successMessage = res['text'];
      // this.successSubject.next();
    });

    setTimeout(() => {
      this.errorSubject.pipe(debounceTime(5000)).subscribe(() => {
        this.isError = false;
      });
      this.successSubject.pipe(debounceTime(6000)).subscribe(() => {
        this.isSuccess = false;
      });
    }, 0);

  }

}
