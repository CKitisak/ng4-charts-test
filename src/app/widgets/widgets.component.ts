import { Component, OnInit } from '@angular/core';
import {NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent} from 'angular2-grid';

interface Box {
  id: number;
  config: any;
}

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  private boxes: Array<Box> = [];
  private rgb: string = '#efefef';
  private curNum;
  private gridConfig: NgGridConfig = <NgGridConfig>{
    margins: [10],
    draggable: true,
    resizable: true,
    max_cols: 0,
    max_rows: 0,
    visible_cols: 0,
    visible_rows: 0,
    min_cols: 0,
    min_rows: 0,
    col_width: 250,
    row_height: 250,
    cascade: 'up',
    min_width: 100,
    min_height: 100,
    fix_to_grid: false,
    auto_style: true,
    auto_resize: false,
    maintain_ratio: false,
    prefer_new: false,
    limit_to_screen: false
  };
  private itemPositions: Array<any> = [];

  constructor() {
    const dashconf = this._generateDefaultDashConfig();
    for (let i = 0; i < dashconf.length; i++) {
      const conf = dashconf[i];
      conf.payload = 1 + i;
      this.boxes[i] = { id: i + 1, config: conf };
    }
    this.curNum = dashconf.length + 1;
  }

  ngOnInit() {
  }

  addBox(): void {
    const conf: NgGridItemConfig = this._generateDefaultItemConfig();
    conf.payload = this.curNum++;
    this.boxes.push({ id: conf.payload, config: conf });
  }

  removeWidget(index: number): void {
    if (this.boxes[index]) {
      this.boxes.splice(index, 1);
    }
  }

  updateItem(index: number, event: NgGridItemEvent): void {
    // Do something here
  }

  onDrag(index: number, event: NgGridItemEvent): void {
    // Do something here
  }

  onResize(index: number, event: NgGridItemEvent): void {
    // Do something here
  }

  private _generateDefaultItemConfig(): NgGridItemConfig {
    return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
  }

  private _generateDefaultDashConfig(): NgGridItemConfig[] {
    return [
      { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 },
      { 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 },
      { 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 },
      { 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 },
      { 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 },
      { 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 }
    ];
  }

}
