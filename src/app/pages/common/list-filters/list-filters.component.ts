import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss']
})
export class ListFiltersComponent implements OnInit {
  @Input('query') query: any;

  @Output() requestListWithFilters: EventEmitter<any> = new EventEmitter();

  perPageFilter = environment.filtersData.perPageFilter;
  sortByFilter = environment.filtersData.sortByFilter;

  constructor() {
  }

  ngOnInit() {
  }

  updatePageCount(isUp: boolean) {
    this.query.page = isUp ? (Number(this.query.page) + 1) : (Number(this.query.page) - 1);

    this.requestListWithFilters.emit();
  }

}
