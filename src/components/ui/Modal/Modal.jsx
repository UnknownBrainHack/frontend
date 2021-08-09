import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContainer, ModalHeader, ModalWrapper, ModalBody } from './styled';
import useClickOutside from '../../../utils/useClickOutside';

export default function Modal({
  children,
  title = 'Title',
  selector = 'portal',
  open = false,
  onClose,
}) {
  const modal = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isRendered, setRender] = useState(open);

  useEffect(() => {
    setMounted(true);
    if (open) setRender(true);
    return () => setMounted(false);
  }, [selector, open]);

  const setInvisible = () => {
    if (!open) setMounted(false);
  };
  useClickOutside(modal, () => onClose());

  if (mounted && isRendered) {
    return createPortal(
      <ModalContainer
        style={{
          animation: `${open ? 'fadeIn' : 'fadeOut'} 0.35s`,
        }}
        onAnimationEnd={setInvisible}
      >
        <ModalWrapper
          ref={modal}
          style={{
            animation: `${open ? 'scaleUp' : 'scaleDown'} 0.35s`,
          }}
        >
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalWrapper>
      </ModalContainer>,
      document.getElementById(selector)
    );
  }
  return null;
}
