'use client';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { asisaData } from '../../../../components/AsisaData';
import TeamCard from '../../../TeamCard';
import Transition from '../../../Transition';
import styles from './page.module.css';

const Page = () => {
  const associations = gsap.timeline();
  const associationsCtn = useRef(null);

  useEffect(() => {
    associations.to(
      associationsCtn.current,
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
      <Transition timeline={associations} text="ASISA" />
      <div className={styles.wrapper} ref={associationsCtn}>
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <h1>ASISA</h1>
            <p>Actuarial Science and Insurance Students Association</p>
          </div>
        </div>
        <main className={styles.main__content}>
          <header className={styles.header}>
            <h1>Our Team</h1>
            <p>ASISA EXECUTIVES 21/22 (THE SYNERGY)</p>
          </header>
          <div className={styles.team__container}>
            {asisaData.map((data) => {
              return <TeamCard data={data} key={data.name} />;
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
