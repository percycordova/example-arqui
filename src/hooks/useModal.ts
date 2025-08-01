import { useState } from "react";

export const useModal = (initial: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initial);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  return { isOpen, openModal, closeModal, toggleModal };
};
