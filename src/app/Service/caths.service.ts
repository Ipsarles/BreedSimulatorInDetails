import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cathlete } from '../Models/CathModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CathsService {
  constructor(private http: HttpClient) {}
  cath: Cathlete | undefined;
  getData(ID: number) {
    let url =
      'https://us-central1-walken-co.cloudfunctions.net/getCathlete?id=' + ID;

    return new Observable<Cathlete>((observer) => {
      this.http.get(url).subscribe((data: any) => {
        let cathlete: Cathlete = {
          level: data.level,
          rarity: data.rarity,
          genes: data.genes,
        };
        observer.next(cathlete);
        observer.complete();
      });
    });
  }
}
