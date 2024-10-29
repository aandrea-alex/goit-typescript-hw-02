import toast from 'react-hot-toast';

export const okNotify = (msg: string): void => {
  toast.success(msg, {
    duration: 700,
  });
};

