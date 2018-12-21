import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfigurationService } from './configuration.service';

@Injectable()
export class RequestService {

  endpointList: any;
  constructor(
    private httpClient: HttpClient,
    private configurationService: ConfigurationService,
  ) {
    this.endpointList = {
      registerAPIUrl: this.configurationService.config.registerEndpointUrl,
    };
  }

  /**
   * Handle Http operation that failed.
   * @param error
   */
  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error)}`);
    }

    // return an observable with a user-facing error message
    return throwError(error);
  }

  /**
   * GET request
   * @param url
   * @param configOptions
   */
  public get(url, configOptions?: any): Observable<any> {
    return this.httpClient
      .get(url, configOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  /**
   * POST request
   * @param url
   * @param data
   * @param configOptions
   */
  public post(url, data, configOptions?: any): Observable<any> {
    return this.httpClient
      .post(url, data, configOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * PUT request
   * @param url
   * @param data
   * @param configOptions
   */
  public put(url, data, configOptions?: any): Observable<any> {
    return this.httpClient
      .put(url, data, configOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * DELETE request
   * @param url
   * @param configOptions
   */
  public delete(url, configOptions?: any): Observable<any> {
    return this.httpClient
      .delete(url, configOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

}
