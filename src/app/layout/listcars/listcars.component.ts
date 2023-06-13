import { Component } from '@angular/core';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-listcars',
  templateUrl: './listcars.component.html',
  styleUrls: ['./listcars.component.scss']
})
export class ListcarsComponent {

  data: any;
  mainImg: string;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getOurLink();
  }

  getOurLink() {
    this.httpService.httpGet(ApiUrls.pages.getOurList, null).subscribe((res: any) => {
      if (res['success']) {
        this.data = res['data'];
        this.mainImg = "data:"+ this.data.mainImg.contentType + ";base64,"+ this.data.mainImg.imageBase64;
        // this.mainImg = "data:"+ this.data.mainImg.contentType + ";base64,"+ this.data.mainImg.imageBase64;
      }
    });
  }
}
