import React from 'react';
import Image from 'next/image';

import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/queen.jpg'
          alt='An image showing HeideQueen'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am HeideQueen</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        and Vue
      </p>
    </section>
  );
}

export default Hero;
