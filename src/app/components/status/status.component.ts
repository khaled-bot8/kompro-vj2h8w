import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  constructor() { }

  ngOnInit() {}

}
