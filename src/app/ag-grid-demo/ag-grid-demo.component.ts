import { Component, OnInit, Input } from '@angular/core';
import { AGGridService } from './ag-grid-service.service';

@Component({
  selector: 'app-ag-grid-demo',
  templateUrl: './ag-grid-demo.component.html',
  styleUrls: ['./ag-grid-demo.component.css']
})
export class AgGridDemoComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  // Configurable
  columnDefs = [
    { headerName: 'Serial Number', field: 'assetSerialNumber', sortable: true },
    { headerName: 'Manufacturer', field: 'manufacturer' },
    { headerName: 'Make Code', field: 'makeCode' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Product Family', field: 'productFamily' },
    { headerName: 'Status', field: 'status' },
    { headerName: 'Model Year', field: 'modelYear' }
  ];

  defaultColDef;
  components;
  rowSelection;
  rowModelType;
  cacheOverflowSize;
  maxConcurrentDatasourceRequests;
  infiniteInitialRowCount;
  maxBlocksInCache;
  paginationPageSize;
  cacheBlockSize;
  getRowNodeId;

  // Passed in data
  rowData = [];

  constructor(private gridService: AGGridService) {
    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: false
    };

    this.components = {
      loadingRenderer: function(params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="../images/loading.gif">';
        }
      }
    };

    this.rowSelection = 'multiple';
    this.rowModelType = 'infinite';

    // Let's keep these in the child components
    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 1;
    this.maxBlocksInCache = 2;
    this.cacheBlockSize = 10;

    // Configurable
    this.paginationPageSize = 10;

    this.getRowNodeId = function(item) {
      return item.id;
    };
  }

  ngOnInit() {}

  renderHtml(params) {
    // put the value in bold
    return 'Value is <b>' + params.value + '</b>';
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    let dataSource = {
      rowCount: null, // number of rows in the dataset
      getRows: params => {
        let filterColumn = '';
        let direction = '';
        if (params.sortModel && params.sortModel.length > 0) {
          filterColumn = params.sortModel[0].colId;
          direction = params.sortModel[0].sort;
        }
        //Calculate page number here
        const pageNumber = params.endRow / this.paginationPageSize;

        // Output here
        // Event emitter to say page selected

        this.gridService.getData(pageNumber, this.paginationPageSize, filterColumn, direction).subscribe(results => {
          const fleetRecords = results.fleetRecords;
          params.successCallback(fleetRecords, results.pagination.totalCount);
        });
      }
    };

    params.api.setDatasource(dataSource);
  }
}
