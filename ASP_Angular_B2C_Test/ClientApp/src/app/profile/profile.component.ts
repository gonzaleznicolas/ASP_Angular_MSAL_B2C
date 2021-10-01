import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { protectedResources } from '../auth-config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("https://localhost:44367/weatherforecast/getweatherforecast")
      .subscribe(o => console.log(o));
  }
}
