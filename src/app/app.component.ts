import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor (private httpService: HttpClient) { }
  arrGreatMans: string [];

  ngOnInit () {
    this.httpService.get('./assets/great_man.json').subscribe(
      data => {
        this.arrGreatMans = data as string [];	 // FILL THE ARRAY WITH DATA.
        console.log(this.arrGreatMans[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
