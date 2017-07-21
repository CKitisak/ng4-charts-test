import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { jqxSliderComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxslider';
import { jqxCheckBoxComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxcheckbox';

@Component({
  selector: 'app-rbg-slider',
  templateUrl: './rbg-slider.component.html',
  styleUrls: ['./rbg-slider.component.css']
})
export class RbgSliderComponent implements AfterViewInit {
  @ViewChild('redSlider') redSlider: jqxSliderComponent;
  @ViewChild('greenSlider') greenSlider: jqxSliderComponent;
  @ViewChild('blueSlider') blueSlider: jqxSliderComponent;

  constructor() { }

  ngAfterViewInit(): void {
    this.setColor();
  }

  fixHex(hex: any): any {
    return (hex.length < 2) ? '0' + hex : hex;
  }

  getTextElement(color: any): any {
    const nThreshold = 105;
    const bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
    const foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
    return foreColor;
  }

  checkBoxOnChange(event: any): void {
    const checked = event.args.checked;
    let value = 'default';
    if (!checked) {
      value = 'fixed';
    }
    this.redSlider.mode(value);
    this.greenSlider.mode(value);
    this.blueSlider.mode(value);
  }

  setColor(): void {
    const red = this.fixHex(Math.round(this.redSlider.value()).toString(16));
    const green = this.fixHex(Math.round(this.greenSlider.value()).toString(16));
    const blue = this.fixHex(Math.round(this.blueSlider.value()).toString(16));
    const color = this.getTextElement({
      r: parseInt(red, 16),
      g: parseInt(green, 16),
      b: parseInt(blue, 16)
    });
    document.getElementById('colorBlock').style.backgroundColor = '#' + red + green + blue;
    document.getElementById('colorLabel').innerHTML = ('#' + red + green + blue).toUpperCase();
    document.getElementById('colorLabel').style.color = color;
  }

  redSliderOnChange(): void {
    this.setColor();
  }

  greenSliderOnChange(): void {
    this.setColor();
  }

  blueSliderOnChange(): void {
    this.setColor();
  }



  tickLabelFormatFunction: any = (value) => {
    if (value === 0) {
      return value;
    }
    if (value === 255) {
      return value;
    }
    return '';
  }

  tooltipFormatFunction: any = (value) => {
    if (this.redSlider.mode() === 'default') {
      if (value < 10) {
        return new Number(value.toPrecision(3));
      }
      if (value > 10 && value < 100) {
        return new Number(value.toPrecision(4));
      } else {
        return new Number(value.toPrecision(5));
      }
    } else {
      if (value < 10) {
        return new Number(value.toPrecision(3));
      }
      if (value > 10 && value < 256) {
        return new Number(value.toPrecision(4));
      }
    }
  }
}
