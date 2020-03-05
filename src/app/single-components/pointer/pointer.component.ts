import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'map-pointer',
  templateUrl: './pointer.component.html',
  styleUrls: ['./pointer.component.scss']
})
export class PointerComponent implements OnInit {

  @Input() city: string;
  @Input() quantity: number;
  @Input('x-axis') x_axis: string;
  @Input('y-axis') y_axis: string;

  constructor() { }

  ngOnInit(): void {
  }

}
