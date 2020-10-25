/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Posion from '../config/posion.json';
import styles from './Home.css';

const getRandom = () => {
  return Math.floor(Math.random() * Posion.length);
};

export default function Home(): JSX.Element {
  const [posion, setPosion] = useState(Posion[getRandom()]);
  const onChange = () => {
    setPosion(Posion[getRandom()]);
  };
  return (
    <div className={styles.container} data-tid="container">
      <div className={styles.content} onClick={onChange}>
        <p className={styles.title}>今日份毒鸡汤：</p>
        <p className={styles.posion}>{posion}</p>
      </div>
      <h4 className={styles.footer}>©2020 Powered by Bill</h4>
    </div>
  );
}
