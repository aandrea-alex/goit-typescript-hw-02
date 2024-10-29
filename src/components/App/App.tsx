import SearchBar from '../SearchBar/SearchBar';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import clsx from 'clsx';
import { Image } from '../../api/image.types';
import { fetchData } from '../../api/fetchData';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [items, setItems] = useState<Image[]>([]); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<boolean>(false); 
  const [currPage, setCurrPage] = useState<number>(0); 
  const [hasMorePages, setHasMorePages] = useState<boolean>(false); 
  const [filter, setFilter] = useState<string>(''); 

  const [selectedImage, setSelectedImage] = useState<Image | null>(null); 
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false); 

  useEffect(() => {
    Modal.setAppElement('#rootModal');
  }, []);

  const updateImages = async (strFilter: string, page: number) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchData(strFilter, page);
      if (data && data.results.length > 0) {
        setItems(prevItems => [...prevItems, ...data.results]);
        setCurrPage(page);
        setHasMorePages(page < data.total_pages); 
      } else {
        setError(true);
        setHasMorePages(false);
      }
    } catch (error: any) {
      console.log(error.message);
      setError(true);
      setHasMorePages(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (strFilter: string) => {
    setFilter(strFilter);
    setItems([]);
    setCurrPage(0);
    setHasMorePages(false);
    updateImages(strFilter, 1);
  };

  const handleMore = () => updateImages(filter, currPage + 1);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <div className={clsx(styles.content, styles.section)}>
        <ErrorMessage isError={error} />
        <ImageGallery images={items} openModal={openModal} />
        {loading && <Loader />}
        <LoadMoreBtn
          isVisible={hasMorePages && !loading}
          onClick={handleMore}
        />
      </div>
      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage}
        onCloseClick={closeModal}
      />
    </div>
  );
}

export default App;