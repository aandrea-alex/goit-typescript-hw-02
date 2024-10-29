import { Image } from "../../api/image.types";

interface ImageModalProps {
  isOpen: boolean;
  image: Image | null;
  onCloseClick: () => void;
}

export type {ImageModalProps}