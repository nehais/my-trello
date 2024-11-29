import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workspace } from '../models/workspace';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getWorkspaces(): Observable<Workspace[]> {
    let getUrl = this.apiUrl + '/workspaces';

    return this.http.get<Workspace[]>(getUrl);
  }

  getWorkspacesByID(id: number): Observable<Workspace> {
    let getUrl = this.apiUrl + '/workspaces/' + String(id);

    return this.http.get<Workspace>(getUrl);
  }
}
