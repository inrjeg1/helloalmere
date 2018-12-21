import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './model/profile';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  profilesUrl: string;

  constructor(private requestService: RequestService) {
    this.profilesUrl = `${this.requestService.endpointList.registerAPIUrl}/api/profiles`;
  }

  /** GET Profiles from the server */
  public getProfiles(): Observable<Profile[]> {
    const url = `${this.profilesUrl}`;
    return this.requestService
      .get(url);
  }

  public createProfile(profile: Profile): Observable<Profile> {
    const url = `${this.profilesUrl}`;
    return this.requestService
      .post(url, profile);
  }

}
