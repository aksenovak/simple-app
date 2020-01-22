import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private location: Location
  ) {
  }

  generateReqData(url: string, params: any) {
    let query = '';

    Object.keys(params).forEach(key => {
      query += `${key}=${params[key]}&`;
    });

    return {
      url: `${environment.API_URL}${url}`,
      query: this.generateQueryString(params)
    };
  }

  generateQueryString(params: any) {
    let query = '';

    Object.keys(params).forEach(key => {
      query += `${key}=${params[key]}&`;
    });

    return query.slice(0, -1);
  }

  generatePathQuery(params: any) {
    if (this.generateQueryString(params) !== '') {
      this.location.go(`${window.location.pathname}?${this.generateQueryString(params)}`);
    } else {
      this.location.go(`${window.location.pathname}`);
    }
  }

  generateSearchParams(query: any, defaultQuery: any) {
    const params = {};

    Object.keys(query).forEach(key => {
      if (query[key] !== defaultQuery[key]) {
        params[key] = query[key];
      } else {
        params[key] = defaultQuery[key];
      }
    });

    if (Object.keys(params).length > 0) {
      return params;
    } else {
      return defaultQuery;
    }
  }
}
