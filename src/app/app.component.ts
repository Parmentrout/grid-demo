import { Component } from '@angular/core';
import { DataService } from './data/mockData.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data: Observable<any>;

  constructor(private mockService: DataService) {
    this.data = this.mockService.getData();
  }
}
