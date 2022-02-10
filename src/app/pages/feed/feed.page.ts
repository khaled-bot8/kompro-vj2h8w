import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})


export class FeedPage implements OnInit {

  today = new Date();

  constructor() { this.startTime();}

  ngOnInit() {
  }
  startTime() {
    var intervalVar = setInterval(function () {
      this.today = new Date().toISOString();
    }
    )
  }
    
}