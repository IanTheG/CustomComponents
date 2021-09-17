import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.scss'],
})
export class ImgCarouselComponent implements OnInit {
  @Input() images: String[] = []

  constructor() {}

  ngOnInit(): void {}
}
