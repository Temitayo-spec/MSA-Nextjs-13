'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import Faculty from './Faculty';
import Exco from './Exco';
import Orientation from './Orientation';
import Career from './Career';
import Studentpreneur from './Studentpreneur';
import Dinner from './Dinner';
import gsap from 'gsap';
import Transition from '../Transition';

const Page = () => {
  const gallery = gsap.timeline();
  const galleryCtn = useRef(null);

  useEffect(() => {
    gallery.to(
      galleryCtn.current,
      {
        duration: 0.5,
        scaleY: 1,
        opacity: 1,
        ease: 'power3.out',
        transformOrigin: 'top',
      },
      '-=0.5'
    );
  });

  return (
    <>
      <Transition timeline={gallery} text="Gallery" />
      <div className={styles.wrapper} ref={galleryCtn}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h1>Gallery</h1>
          </header>

          <div className={styles.content}>
            <Faculty />
            <Exco />
            <Orientation />
            <Career />
            <Studentpreneur />
            <Dinner />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
