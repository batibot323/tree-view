import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'api/data/data.json';

  constructor(private http: HttpClient) { }

}
