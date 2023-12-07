import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Calle 1');

  }

  addItem(): void {
    const dataItem: ItemModel = {
      name: 'pepe',
      price: 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg'
    }
  }

}
