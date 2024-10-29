interface ImageUrls {
  regular: string | undefined;
  small: string;
}

interface User {
  username: string;
}

interface Image {
  id: string;
  urls: ImageUrls;
  description: string;
  likes: number;
  user: User;
}

export type { Image };
