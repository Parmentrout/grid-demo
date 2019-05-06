import { Component, OnInit, Input } from '@angular/core';
import { IGridData } from '../material-grid/grid.types';
import { PageSettingsModel } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-syncfusion',
  templateUrl: './syncfusion.component.html',
  styleUrls: ['./syncfusion.component.css']
})
export class SyncfusionComponent implements OnInit {
  public rowData: object[];
  public pageSettings: PageSettingsModel;

  @Input()
  set data(data: IGridData[]) {
    //Verify that data matches contract, else throw error here
    this.rowData = data;
  }

  constructor() {}

  ngOnInit() {
    this.pageSettings = { pageSize: 10 };
  }
}
