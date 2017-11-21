import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-switch-basic',
  template: `
    <nz-switch [(ngModel)]="switchValue"></nz-switch>`,
  styles  : []
})
export class NzDemoSwitchBasicComponent implements OnInit {
  switchValue = false;

  constructor() {
  }

  ngOnInit() {
  }
}

