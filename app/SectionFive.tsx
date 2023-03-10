import React from 'react';
import { cardData } from '../components/CardData';
import Card from './Card';
import styles from './sectionFive.module.css';
import { motion } from 'framer-motion';

const SectionFive = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const imageVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      duration: 1,
    },
  };
  return (
    <div className={styles.wrapper}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className={styles.content}
      >
        <motion.h1 variants={textVariants}>Upcoming Events</motion.h1>
        <motion.hr variants={textVariants} />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className={styles.events}
        >
          {cardData.map((item, index) => {
            return (
              <motion.div variants={cardVariants} key={index}>
                <Card
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionFive;
