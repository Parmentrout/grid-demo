import { Component } from '@angular/core';
import { DataService } from './data/mockData.service';
import { Observable } from 'rxjs';
import { GridConfiguration } from './grid.types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Observable<any>;
  configuration: GridConfiguration;

  constructor(private mockService: DataService) {
    this.data = this.mockService.getData();
    this.configuration = this.mockService.getConfiguration();
  }
}
