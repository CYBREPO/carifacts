import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'autohyre';
  showLoader: boolean = false;
  
  constructor(public router: Router,private loaderService: LoaderService) {

  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      setTimeout(() => {
        this.showLoader = val;
      }, 0);
    });
  }


}
