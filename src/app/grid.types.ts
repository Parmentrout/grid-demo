export class GridConfiguration {
  columnDefinitions: GridColumn[];
  pageSize?: number;
  pageNumber?: number;
  totalSize?: number;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
  selectionEnabled?: boolean = false;
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
