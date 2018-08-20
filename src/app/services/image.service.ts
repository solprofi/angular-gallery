import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor() { }

  visibleImages = [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id) {
    return IMAGES.slice(0).find(image => image.id == id);
  }

}

const IMAGES = [
  {id: 1, category: 'space', caption: 'space', url: '../../assets/images/space1.jpg' },
  {id: 2, category: 'space', caption: 'space', url: '../../assets/images/space2.jpg' },
  {id: 3, category: 'space', caption: 'space', url: '../../assets/images/space3.jpg' },
  {id: 4, category: 'space', caption: 'space', url: '../../assets/images/space4.jpg' },
  {id: 5, category: 'summer', caption: 'summer', url: '../../assets/images/summer1.jpg' },
  {id: 6, category: 'summer', caption: 'summer', url: '../../assets/images/summer2.jpg' },
  {id: 7, category: 'summer', caption: 'summer', url: '../../assets/images/summer3.jpg' },
  {id: 8, category: 'summer', caption: 'summer', url: '../../assets/images/summer4.jpg' },
  {id: 9, category: 'business', caption: 'business', url: '../../assets/images/business1.jpg' },
  {id: 10, category: 'business', caption: 'business', url: '../../assets/images/business2.jpg' },
  {id: 11, category: 'business', caption: 'business', url: '../../assets/images/business3.jpg' },
  {id: 12, category: 'business', caption: 'business', url: '../../assets/images/business4.jpg' },
  {id: 13, category: 'tech', caption: 'tech', url: '../../assets/images/tech1.jpg' },
  {id: 14, category: 'tech', caption: 'tech', url: '../../assets/images/tech2.jpg' },
  {id: 15, category: 'tech', caption: 'tech', url: '../../assets/images/tech3.jpg' },
  {id: 16, category: 'tech', caption: 'tech', url: '../../assets/images/tech4.jpg' },
]