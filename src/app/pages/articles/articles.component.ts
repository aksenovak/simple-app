import {Component, OnInit} from '@angular/core';

import {CommonService} from '../../services/common/common.service';
import {SearchApiService} from '../../services/search-api/search-api.service';

import {ActivatedRoute} from '@angular/router';

import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  entities = environment.articles.entities;
  defaultQuery = environment.articles.defaultQuery;
  query = environment.articles.query;
  list: Array<any>;

  constructor(
    private activeRoute: ActivatedRoute,
    private search: SearchApiService,
    private common: CommonService
  ) {
  }

  ngOnInit() {
    this.checkPreQuery();
  }

  checkPreQuery() {
    if (window.location.search.trim() !== '') {
      const query = window.location.search.trim().slice(1);

      if (query !== '') {
        Object.assign(this.query, this.defaultQuery, this.activeRoute.snapshot.queryParams);
      }
    }

    this.getArticles();
  }

  getArticles() {
    const query = this.common.generateSearchParams(this.query, this.defaultQuery);

    this.search.searchMethod(this.entities, query).subscribe(
      response => {
        this.list = response.data.list;

        if (JSON.stringify(this.defaultQuery) !== JSON.stringify(query)) {
          this.common.generatePathQuery(query);
        } else {
          this.common.generatePathQuery({});
        }
      },
      error => {
        alert('Error! Check console!');
        console.error(error);
      }
    );
  }

  execQuestionsByFilters() {
    this.getArticles();
  }
}
