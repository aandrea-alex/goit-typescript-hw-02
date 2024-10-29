interface ImageUrls {
    small: string;
  }
  
  interface Image {
    id: string; 
    urls: ImageUrls;
    description: string;
  }
  
  interface ImageCardProps {
    image: Image;
  }
  
  export type{ ImageCardProps, Image, ImageUrls };