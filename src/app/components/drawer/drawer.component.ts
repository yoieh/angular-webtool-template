import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  element: HTMLElement;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggle(val: boolean | undefined) {
    typeof val !== "undefined" ? this.isOpen = val : this.isOpen = !this.isOpen;
  }

  toggleActive(event: any, url: string) {
    event.preventDefault();
    if (this.element !== undefined) {
      this.element.style.backgroundColor = "white";
    }
    var target = event.currentTarget;
    target.style.backgroundColor = "#e51282";
    this.element = target;
  }

}
