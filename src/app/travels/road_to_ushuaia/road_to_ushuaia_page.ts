import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'road-to-ushuaia-page',
  templateUrl: './road_to_ushuaia_page.html',
 styleUrls: ['./road_to_ushuaia_page.scss']
})
export class RoadToUshuaiaPage {
  constructor(private readonly router: Router) {
    setTimeout(() => {
      setTimeout(() => {
        router.navigate(['/travels']);
      }, 100);
      window.open('https://advrider.com/f/threads/california-to-ushuaia-2024.1750647/page-1000', '_blank');
    }, 2000);
  }
}