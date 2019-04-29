import { Component, Input } from '@angular/core';

@Component({
  selector: 'vss-grid',
  templateUrl: './grid.component.html',
  styleUrls: [ './grid.component.css' ]
})
export class VSSGridComponent  {

  @Input() configuration: GridConfiguration;

  @Input() data: any;

  // displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  // columnsToDisplay: string[] = this.displayedColumns.slice();

  
}

export class GridConfiguration {
  columnDefinitions: GridColumns[];
}

export class GridColumns {
  name: string;
  sort: SortDirection;
  visible: boolean = true;
  pinned: boolean = false;
  width: number;
}

export enum SortDirection {
  None,
  Ascending,
  Descending
}
