import { Image } from '../../api/image.types';

export interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}
