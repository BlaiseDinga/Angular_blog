import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts-aalen',
  templateUrl: './ts-aalen.component.html',
  styleUrls: ['./ts-aalen.component.css'],
  // styles: ['p { color: red; }']
})
export class TsAalenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName = "Armir";
  lastName = "Pajaziti";
}
