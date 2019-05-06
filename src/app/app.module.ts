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
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    GridModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    DragDropModule,
    ScrollingModule,
    CdkTableModule,
    CdkTreeModule,
    A11yModule,
    AgGridModule.withComponents([])
  ],
  declarations: [AppComponent, VSSGridComponent, AgGridDemoComponent, SyncfusionComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
