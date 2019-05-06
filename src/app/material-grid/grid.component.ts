import { Component, Input, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { GridConfiguration, IGridData } from './grid.types';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import { CdkDragStart, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'vss-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class VSSGridComponent implements OnInit {
  private _dataSource: MatTableDataSource<IGridData>;
  private _gridConfiguration: GridConfiguration;
  displayedColumns: string[];
  previousIndex: number;

  @Input()
  set configuration(config: GridConfiguration) {
    this._gridConfiguration = config;
    this.displayedColumns = config.columnDefinitions.map(x => x.name);
    this.setDisplayedColumns();
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

  ngOnInit(): void {
    this._dataSource.sort = this.sort;
  }

  private setSort(configuration: GridConfiguration) {
    if (configuration.sortColumn && configuration.sortDirection) {
      this.sort.sort(<MatSortable>{ id: configuration.sortColumn, start: configuration.sortDirection });
    }
  }

  dragStarted(event: CdkDragStart, index: number) {
    this.previousIndex = index;
  }

  dropListDropped(event: CdkDropList, index: number) {
    if (event) {
      moveItemInArray(this.displayedColumns, this.previousIndex, index);
      this.setDisplayedColumns();
    }
  }

  setDisplayedColumns() {
    this.configuration.columnDefinitions.forEach((column: any, index) => {
      column.index = index;
      this.displayedColumns[index] = column.name;
    });
  }
}
