import { Image } from './ImageCard.types';

export interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}
