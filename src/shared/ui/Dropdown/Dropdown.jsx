/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, cloneElement } from 'react';
import classNames from 'classnames';
import styles from './Dropdown.module.css';

export function Dropdown({
  isOpen,
  setOpen,
  trigger,
  overlay,
  shouldCloseOnClick,
  className,
}) {
  const [isOpened, setOpened] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if ((!isOpen && !isOpened) || containerRef.current.contains(e.target)) {
        return;
      }
      if (setOpen) {
        setOpen(true);
      } else {
        setOpened();
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const handleClick = ({ target }) => {
    if (!shouldCloseOnClick) {
      return;
    }

    const tagName = target.tagName.toLowerCase();

    if (tagName === 'button') {
      setOpened(false);
    }
  };

  const controlledTrigger = cloneElement(trigger, {
    onClick: () => setOpen(isOpen),
  });
  const uncontrolledTrigger = cloneElement(trigger, {
    onClick: () => setOpened(!isOpened),
  });
  const newOverlay = cloneElement(overlay, { className });

  if (setOpen) {
    return (
      <div className={styles.className} ref={containerRef}>
        {controlledTrigger}
        {isOpen && (
          <div className={classNames(styles.overlay, className)}>
            {newOverlay}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.className} ref={containerRef}>
      {uncontrolledTrigger}
      {isOpened && (
        <div
          className={classNames(styles.overlay, className)}
          onClick={handleClick}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          {newOverlay}
        </div>
      )}
    </div>
  );
}
