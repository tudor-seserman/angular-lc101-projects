import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Assignment Photos';
  image1 = 'https://d1t35hkz8sx2bl.cloudfront.net/api/file/3dSlTYROTAKtqSjOLJni?cache=true';
  image2 = 'https://pngimg.com/uploads/bagel/bagel_PNG6.png';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Six_weeks_old_cat_(aka).jpg/320px-Six_weeks_old_cat_(aka).jpg';
  image4 = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif";
  constructor() { }

  ngOnInit() {
  }

}