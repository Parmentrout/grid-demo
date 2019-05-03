import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { VSSGridComponent } from './material-grid/grid.component';
import { DataService } from './data/mockData.service';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridDemoComponent } from './ag-grid-demo/ag-grid-demo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    AgGridModule.withComponents([])
  ],
  declarations: [AppComponent, VSSGridComponent, AgGridDemoComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
