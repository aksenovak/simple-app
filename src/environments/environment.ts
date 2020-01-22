// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://stage.legaladviceme.com/api/',
  questions: {
    entities: 'questions',
    defaultQuery: {
      sortBy: 'date:desc',
      perPage: '10',
      page: 1,
    },
    query: {
      sortBy: 'date:desc',
      perPage: '10',
      page: 1,
    }
  },
  articles: {
    entities: 'articles',
    defaultQuery: {
      sortBy: 'date:desc',
      perPage: '10',
      page: 1,
    },
    query: {
      sortBy: 'date:desc',
      perPage: '10',
      page: 1,
    }
  },
  filtersData: {
    perPageFilter:
      [
        {id: 1, value: '10'},
        {id: 2, value: '20'},
        {id: 3, value: '50'},
        {id: 4, value: '100'},
      ],
    sortByFilter:
      [
        {id: 1, value: 'Date (newest first)', query: 'date:desc'},
        {id: 2, value: 'Date (oldest first)', query: 'date:asc'},
        {id: 3, value: 'Views (999-0)', query: 'views:desc'},
        {id: 4, value: 'Views (0-999)', query: 'views:asc'},
      ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
