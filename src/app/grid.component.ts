import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { GridConfiguration, IGridData } from './grid.types';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'vss-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class VSSGridComponent implements OnInit {
  private _dataSource: MatTableDataSource<IGridData>;

  @Input() configuration: GridConfiguration;

  @ViewChild(MatSort) sort: MatSort;

  @Input()
  set data(data: IGridData[]) {
    //Verify that data matches contract, else throw error here

    this._dataSource = new MatTableDataSource(data);
  }

  get gridData(): MatTableDataSource<IGridData> {
    return this._dataSource;
  }

  get columnsToDisplay(): string[] {
    return this.configuration.columnDefinitions.map(x => x.name);
  }

  ngOnInit(): void {
    this._dataSource.sort = this.sort;
  }
}
