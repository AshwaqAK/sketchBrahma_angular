import { Component, OnInit } from '@angular/core';
import { BreweriesService } from '../services/breweries.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  breweries: any;
  loading = this.loader.loading$
  query: any = {
    per_page: 10,
    page: 1
  };
  previousBtn: boolean = false;
  searchingBrewery: string = ''
  searchingstate: string = ''
  searchingPostalCode: string = ''
  searchingName: string = ''
  searchingCity: string = ''
  constructor(private breweriesService: BreweriesService, private loader: LoadingService) { }

  ngOnInit(): void {
    this.breweriesList(this.query);
  }

  // Listing the breweries
  breweriesList(query: any) {
    this.breweriesService.breweriesList(query).subscribe(data => {
      this.breweries = data;
    })
  }


  // pagination
  pageChange(pageIndex: number) {
    this.query['page'] = pageIndex
    this.breweriesList(this.query);
  }

  // next page
  nextPageChange() {
    this.query['page'] = this.query['page'] + 1
    this.breweriesList(this.query);
  }

  // prev page
  prevPageChange() {
    this.query['page'] = this.query['page'] - 1
    this.breweriesList(this.query);
  }

  // search by the type of breweries
  searchBrewery() {
    this.query['by_type'] = this.searchingBrewery
    this.breweriesList(this.query);
  }

  // search by the state
  searchState() {
    this.query['by_state'] = this.searchingstate
    this.breweriesList(this.query);
  }

  // search by postal code
  searchPostalCode() {
    this.query['by_postal'] = this.searchingPostalCode
    this.breweriesList(this.query);
  }

  // search by name
  searchName() {
    this.query['by_name'] = this.searchingName
    this.breweriesList(this.query);
  }

  // search by city 
  searchCity() {
    this.query['by_city'] = this.searchingCity
    this.breweriesList(this.query);
  }
}
