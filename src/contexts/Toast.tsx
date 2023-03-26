import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { nanoid } from 'nanoid';
import { ToastType, IToast, B2Toast } from 'react-b2components';

interface ToastProviderProps {
  children: React.ReactNode;
}

interface ToastContextValues {
  addToast: (text: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValues>(
  {} as ToastContextValues
);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toastsList, setToastsList] = useState<IToast[]>([]);

  const addToast = useCallback((text: string, type: ToastType = 'info') => {
    const newToast: IToast = {
      id: nanoid(),
      text,
      type,
    };
    setToastsList((prevState) => [...prevState, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToastsList((prevState) => prevState.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (toastsList.length) {
        removeToast(toastsList[0].id);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [toastsList, removeToast]);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {!!toastsList.length && (
        <B2Toast list={toastsList} remove={removeToast} />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  return context;
};
