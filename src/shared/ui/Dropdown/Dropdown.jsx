import React, { useState, useEffect, useRef, cloneElement } from 'react';
import classNames from 'classnames';
import styles from './Dropdown.module.css';

export function Dropdown({
  isOpen,
  setOpen,
  setClose,
  trigger,
  overlay,
  className,
}) {
  const [isOpened, setOpened] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const handleClick = setOpen
      ? (e) => {
          if (!containerRef.current.contains(e.target)) {
            setClose();
          }
        }
      : (e) => {
          if (!containerRef.current.contains(e.target)) {
            setOpened();
          }
        };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const controlledTrigger = cloneElement(trigger, { onClick: () => setOpen() });
  const uncontrolledTrigger = cloneElement(trigger, {
    onClick: () => setOpened(!isOpen),
  });
  const newOverlay = cloneElement(overlay, { className });

  if (setOpen) {
    return (
      <>
        {isOpen && <div className={styles.wrapper} />}
        <div className={styles.className} ref={containerRef}>
          {controlledTrigger}
          {isOpen && (
            <div className={classNames(styles.overlay, className)}>
              {newOverlay}
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      {isOpened && <div className={styles.wrapper} />}
      <div className={styles.className} ref={containerRef}>
        {uncontrolledTrigger}
        {isOpened && (
          <div className={classNames(styles.overlay, className)}>
            {newOverlay}
          </div>
        )}
      </div>
    </>
  );
}
