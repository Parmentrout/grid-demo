import { Component, Input } from '@angular/core';
import { GridConfiguration } from './grid.types';

@Component({
  selector: 'vss-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class VSSGridComponent {
  @Input() configuration: GridConfiguration;

  @Input() data: any;

  get columnOptions(): string[] {
    return this.configuration.columnDefinitions.map(x => x.name);
  }
}
