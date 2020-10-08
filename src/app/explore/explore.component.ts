import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("clicked");
  }

}
