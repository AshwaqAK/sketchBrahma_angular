import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { breweries } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {

  constructor(private http: HttpClient) { }

  // brewer services list
  breweriesList(queryParam: any) {
    return this.http.get(breweries.breweriesList, { params: queryParam })
  }
}
