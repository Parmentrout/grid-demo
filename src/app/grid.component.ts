import { Component, Input, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { GridConfiguration, IGridData } from './grid.types';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import { config } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'vss-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class VSSGridComponent implements OnInit {
  private _dataSource: MatTableDataSource<IGridData>;
  private _gridConfiguration: GridConfiguration;

  @Input()
  set configuration(config: GridConfiguration) {
    this._gridConfiguration = config;
    this.setSort(config);
  }

  get configuration(): GridConfiguration {
    return this._gridConfiguration;
  }

  @Input()
  set data(data: IGridData[]) {
    //Verify that data matches contract, else throw error here
    this._dataSource = new MatTableDataSource(data);
  }

  get gridData(): MatTableDataSource<IGridData> {
    return this._dataSource;
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  get columnsToDisplay(): string[] {
    return this.configuration.columnDefinitions.map(x => x.name);
  }

  ngOnInit(): void {
    this._dataSource.sort = this.sort;
  }

  private setSort(configuration: GridConfiguration) {
    if (configuration.sortColumn && configuration.sortDirection) {
      this.sort.sort(<MatSortable>{ id: configuration.sortColumn, start: configuration.sortDirection });
    }
  }
}
