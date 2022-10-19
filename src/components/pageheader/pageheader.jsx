/* eslint-disable react/button-has-type */

import { useState, useEffect, useRef } from 'react';
import styles from './pageheader.module.css';
import { Button } from '../Button/button';
import { Dropdown } from '../dropdowns/dropdown';

const Pageheader = function Pageheader({ title }) {
  const [isOpen, setOpen] = useState(false);
  const themeRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!themeRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <div ref={themeRef}>
        <Button
          size="medium"
          color="reverse-blue"
          title="Светлая тема"
          iconType="Sun"
          onClick={() => setOpen(!isOpen)}
        />
        <Dropdown isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Pageheader;
