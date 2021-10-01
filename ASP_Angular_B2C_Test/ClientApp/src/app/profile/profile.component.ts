import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { protectedResources } from '../auth-config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + 'weatherforecast').subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }
}
