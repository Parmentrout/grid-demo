import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { VSSGridComponent } from './grid.component';
import { DataService } from './data/mockData.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTableModule ],
  declarations: [ AppComponent, VSSGridComponent ],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
