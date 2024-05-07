import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  currentIndex = 0;
  images = ['assets/slide.png', 'assets/slide.png', 'assets/slide.png'];
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.showNext();
    }, 3000);
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    console.log(this.currentIndex);
  }
}
