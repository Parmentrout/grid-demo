import { Component, Input } from '@angular/core';
import { GridConfiguration } from './grid.types';

@Component({
  selector: 'vss-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class VSSGridComponent {
  private _gridData: any[];

  @Input() configuration: GridConfiguration;

  @Input()
  set data(data: any) {
    this._gridData = data;
  }

  get gridData(): any {
    return this._gridData;
  }

  get columnsToDisplay(): string[] {
    return this.configuration.columnDefinitions.map(x => x.name);
  }
}
