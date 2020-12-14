import { Component, OnInit } from '@angular/core';
import { ImagesServices } from 'src/app/services/images.services';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [ImagesServices]
})
export class CalendarComponent implements OnInit {

  myDate: any;
  formatDate: string;
  imageUrl: string; 
  description: string;
  title: string;

  constructor(
    private _service: ImagesServices
  ) { }

  ngOnInit(): void {
  }

  printcal() {
    this.myDate = document.querySelector("#inputCal");
    let DateTemp = this.myDate.value.split("/");
    this.formatDate = DateTemp[2] + "-" + DateTemp[0] + "-" + DateTemp[1];
    console.log(this.formatDate);
    this._service.getImage(this.formatDate).subscribe(
      response => {
        let res: any;
        res = response;
        console.log(res);
        this.title = res.title;
        this.imageUrl= res.url;
        this.description= res.explanation; 
      },
      error => {
        console.log(error);
      }
    )
  }
}
