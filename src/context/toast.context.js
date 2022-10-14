import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";

const ToastContext = React.createContext();

const toastConfig = {
  position: "top-center",
  autoClose: 2000,
  closeButton: true,
  closeOnClick: true,
  pauseOnHover: true,
};

export function useToast() {
  return useContext(ToastContext);
}

export const ToastProvider = ({ children }) => {
  const warningToast = (message) => {
    toast.warn(message, toastConfig);
    return <ToastContainer />;
  };
  const successToast = (message) => {
    toast.success(message, toastConfig);
    return <ToastContainer />;
  };
  const errorToast = (message) => {
    toast.error(message, toastConfig);
    return <ToastContainer />;
  };

  return (
    <ToastContext.Provider
      value={{
        warningToast,
        successToast,
        errorToast,
      }}>
      {children}
    </ToastContext.Provider>
  );
};
