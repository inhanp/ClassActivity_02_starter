import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk',
  templateUrl: './walk.component.html',
  styleUrls: ['./walk.component.css']
})
export class WalkComponent implements OnInit {
  date = new Date(2020, 1, 9);

  constructor() { }

  ngOnInit() {
  }

}
