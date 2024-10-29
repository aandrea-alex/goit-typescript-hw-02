import toast from 'react-hot-toast';

export const errNotify = (msg: string): void => {
  toast.error(msg, {
    duration: 700,
  });
};
