import {h, render, Component} from 'preact';
import localforage from 'localforage';

const ClearStuff = props => {
  const clearStuff = () => {
    localforage.clear().then(() => {
      console.log('Storage cleared.');
    });
  }

  return (
    <button onClick={clearStuff}>Clear stuff</button>
  );
};

export default ClearStuff;
