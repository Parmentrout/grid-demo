import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IGridResponse } from './ag-grid.types';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AGGridService {
  private readonly url =
    'https://alpha1ufl.myvisionlink.com/t/trimble.com/VSS-Alpha-UnifiedFleet/1.0/UnifiedFleet/FleetSummary/v2';

  constructor(private httpClient: HttpClient) {}

  getData(pageNumber: number, pageSize: number, sort: string = '', direction: string = ''): Observable<IGridResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer c635b74e7f4ea153ab705dc443d3dde1',
        'x-visionlink-customeruid': '8abcf851-44c5-e311-aa77-00505688274d'
      })
    };
    let buildUrl = `${this.url}?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    if (sort !== '') {
      let dir = direction === 'asc' ? '' : '-';
      buildUrl = buildUrl + `&sort=${dir}${sort}`;
    }
    return this.httpClient.get<IGridResponse>(buildUrl, httpOptions);
  }
}
