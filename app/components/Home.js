// @flow
import React, { Component } from 'react';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div data-tid="container">
        <div className={styles.container}>
          <h2>Anti-QAX</h2>
        </div>
        <h4 className={styles.footer}>©2019 Powered by Bill</h4>
      </div>
    );
  }
}
