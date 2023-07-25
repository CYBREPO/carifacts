import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { ApiUrls } from 'src/app/constants/apiRoutes';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  gridData: Array<any> = [];

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
    this.getAllGrids();
  }
  getAllGrids() {
    this.httpservice.httpGet(ApiUrls.grid.getGrids, null).subscribe((res: any) => {
      if (res['success']) {
        this.gridData = res['data'];
        if (this.gridData) {
          this.gridData.map((m: any) => {
            m.gridSixImage = environment.url + m.gridSixImage;
            return m
          })
        }
      }
    })
  }
}
