import React from 'react';
import { ImageGalleryProps } from './ImageGallery.types';
import { ImageCard } from './ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  const handleImageClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const clickedCard = (event.target as HTMLElement).closest('li');
    if (clickedCard) {
      const imageId = clickedCard.getAttribute('data-imageid');
      const clickedImageObj = images.find(image => image.id === imageId);
      if (clickedImageObj) {
        openModal(clickedImageObj);
      }
    }
  };

  return (
    <>
      {images.length > 0 && (
        <ul className={styles.gallery} onClick={handleImageClick}>
          {images.map(image => (
            <li key={image.id} data-imageid={image.id}>
              <ImageCard image={image} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ImageGallery;
