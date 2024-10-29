import axios from 'axios';
import { Image } from './image.types';
import { BASE_URL, ACCESS_KEY } from './constants';

interface SearchResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export const fetchData = async (
  searchStr: string,
  pageNum: number = 1
): Promise<SearchResponse | undefined> => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  const apiParams = {
    client_id: ACCESS_KEY,
    page: pageNum,
    query: encodeURIComponent(searchStr),
    per_page: 10,
  };

  const endPoint = '/search/photos';

  try {
    const response = await axiosInstance.get<SearchResponse>(endPoint, {
      params: apiParams,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return undefined;
  }
};
