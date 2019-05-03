import { Component, OnInit, Input } from '@angular/core';
import { IGridData } from '../material-grid/grid.types';

@Component({
  selector: 'app-ag-grid-demo',
  templateUrl: './ag-grid-demo.component.html',
  styleUrls: ['./ag-grid-demo.component.css']
})
export class AgGridDemoComponent implements OnInit {
  columnDefs = [
    { headerName: '', field: 'assetIcon', type: 'html', pinned: true },
    { headerName: 'Asset ID', field: 'assetUID', pinned: true },
    { headerName: 'Serial Number', field: 'assetSerialNumber' },
    { headerName: 'Switch Name', field: 'switchName' },
    { headerName: 'Switch State', field: 'switchState' },
    { headerName: 'Odometer', field: 'odometer' }
  ];

  rowData = [];

  @Input()
  set data(data: IGridData[]) {
    //Verify that data matches contract, else throw error here
    this.rowData = data;
  }

  constructor() {}

  ngOnInit() {}
}
