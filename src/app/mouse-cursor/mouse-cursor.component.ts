import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss']
})
export class MouseCursorComponent implements OnInit {

  x: number;
  y: number;

  constructor() { }

  ngOnInit(): void {
  }

  onMousemove(e: MouseEvent) {
    this.x = e.x;
    this.y = e.y;
  }

}
