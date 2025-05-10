import { useState } from 'react';

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, openModal, closeModal, toggle };
};
