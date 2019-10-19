import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        width: 0,
      })),
      transition('open => closed', [
        animate('0.3s ease-in')
      ]),
      transition('closed => open', [
        animate('0.3s ease-out')
      ]),
    ]),
  ]
})
export class DrawerComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(val) {
    typeof val !== "undefined" ? this.isOpen = val : this.isOpen = !this.isOpen;
  }

}
