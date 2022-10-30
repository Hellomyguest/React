import React, { useState, useEffect, useRef, cloneElement } from 'react';
import classNames from 'classnames';
import styles from './Dropdown.module.css';

export function Dropdown({ trigger, overlay, className }) {
  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const newTrigger = cloneElement(trigger, { onClick: () => setOpen(!isOpen) });
  const newOverlay = cloneElement(overlay, { className });

  return (
    <div className={styles.className} ref={containerRef}>
      {newTrigger}
      {isOpen && (
        <div className={classNames(styles.overlay, className)}>
          {newOverlay}
        </div>
      )}
    </div>
  );
}
