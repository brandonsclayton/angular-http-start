import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ServerService {
  private firebaseUrl = 'https://udemy-ng-http-b6c55.firebaseio.com/';

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});

    // return this.http.post(
    //     this.firebaseUrl,
    //     servers,
    //     { headers: headers });

    return this.http.put(
        `${this.firebaseUrl}data.json`,
        servers,
        { headers: headers });
  }

  getServers() {
    return this.http.get(this.firebaseUrl);
  }

  getAppName() {
    return this.http.get(`${this.firebaseUrl}appName`)
        .pipe(map(res => res.json()));
  }

}
