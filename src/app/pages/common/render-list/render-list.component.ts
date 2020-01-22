import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.scss']
})
export class RenderListComponent implements OnInit {
  @Input('items') list: any;
  @Input('current-list-class') currentListClass?: string;

  constructor() {
  }

  ngOnInit() {
  }

}
