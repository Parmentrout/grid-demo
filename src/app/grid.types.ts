export class GridConfiguration {
  columnDefinitions: GridColumn[];
  pageSize?: number;
  pageNumber?: number;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
}

export class GridColumn {
  name: string;
  label: string;
  visible?: boolean = true;
  pinned?: boolean = false;
  width?: number;
}

export interface IGridData {
  [key: string]: string | number;
}
