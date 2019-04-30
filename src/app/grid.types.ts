export class GridConfiguration {
  columnDefinitions: GridColumn[];
  pageSize?: number;
  pageNumber?: number;
}

export class GridColumn {
  name: string;
  label: string;
  sort: SortDirection;
  visible?: boolean = true;
  pinned?: boolean = false;
  width?: number;
}

export enum SortDirection {
  None,
  Ascending,
  Descending
}
