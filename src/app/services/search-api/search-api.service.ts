import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {CommonService} from '../common/common.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
  // URL: 'https://stage.legaladviceme.com/api/search?entities=questions&sortBy=date:desc&perPage=10&page=1'

  constructor(
    private http: HttpClient,
    private common: CommonService
  ) {
  }

  searchMethod(model: string, query: any): Observable<any> {
    const data = this.common.generateReqData(`search`, query);

    return this.http.get(`${data.url}?entities=${model}&${data.query}`);
  }
}
