import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from '@dc/models';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.url}/dihes`);
  }
}
