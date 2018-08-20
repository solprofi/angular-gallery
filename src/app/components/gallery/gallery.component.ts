import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  visibleImages: any[] = [];
  constructor(private imageService: ImageService) {
    this.visibleImages = imageService.getImages();
   }

   @Input() filterBy? : string = 'all';

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
