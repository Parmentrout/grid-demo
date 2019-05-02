import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data/mockData.service';
import { Observable } from 'rxjs';
import { GridConfiguration } from './grid.types';
import { map } from 'rxjs/operators';
import { VSSGridComponent } from './grid.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Observable<any[]>;
  configuration: GridConfiguration;

  @ViewChild(VSSGridComponent) gridComponent: VSSGridComponent;

  constructor(private mockService: DataService) {
    this.data = this.mockService.getData().pipe(
      map(rows => {
        for (let row of rows) {
          row['assetIcon'] = '<img src="https://s3.amazonaws.com/visionlinkassets/asset-icons/v1/BackhoeLoader.png">';
        }
        return rows;
      })
    );
    this.configuration = this.mockService.getConfiguration();
  }

  ngOnInit() {
    this.gridComponent.sort.sortChange.subscribe(console.log);
  }
}
