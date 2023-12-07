import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {


  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "Pudgy Penguin #1",
        price: 0.2,
        image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg"
      },
      {
        name: "Pudgy Penguin #2",
        price: 0.1,
        image: "https://rickandmortyapi.com/api/character/avatar/362.jpeg"
      },
      {
        name: "Pudgy Penguin #3",
        price: 0.3,
        image: "https://rickandmortyapi.com/api/character/avatar/363.jpeg"
      },
      {
        name: "Pudgy Penguin #4",
        price: 0.4,
        image: "https://rickandmortyapi.com/api/character/avatar/364.jpeg"
      },
      {
        name: "Pudgy Penguin #5",
        price: 0.5,
        image: "https://rickandmortyapi.com/api/character/avatar/365.jpeg"
      },
      {
        name: "Pudgy Penguin #6",
        price: 0.6,
        image: "https://rickandmortyapi.com/api/character/avatar/366.jpeg"
      },
      {
        name: "Pudgy Penguin #7",
        price: 0.7,
        image: "https://rickandmortyapi.com/api/character/avatar/367.jpeg"
      },
      {
        name: "Pudgy Penguin #8",
        price: 0.8,
        image: "https://rickandmortyapi.com/api/character/avatar/368.jpeg"
      },
      {
        name: "Pudgy Penguin #9",
        price: 0.9,
        image: "https://rickandmortyapi.com/api/character/avatar/369.jpeg"
      },
      {
        name: "Pudgy Penguin #10",
        price: 0.9,
        image: "https://rickandmortyapi.com/api/character/avatar/370.jpeg"
      },
      {
        name: "Pudgy Penguin #11",
        price: 0.9,
        image: "https://rickandmortyapi.com/api/character/avatar/371.jpeg"
      },
      {
        name: "Pudgy Penguin #12",
        price: 0.9,
        image: "https://rickandmortyapi.com/api/character/avatar/372.jpeg"
      }
    ]

    console.log(data);
    
    return of(data).pipe(
      delay(1500)
    )
  }



}
