import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {
  date = new Date(2020, 1, 9);
  constructor() { }

  ngOnInit() {
  }

}
