import {h, render, Component} from 'preact';
import localforage from 'localforage';

const GetStuff = props => {
  const getStuff = () => {
    localforage.getItem('storage').then(value => {
      if (value) {
        console.log('Stored data: ' + value);
      } else {
        console.log('No stored data.');
      }
    });
  }

  return (
    <button onClick={getStuff}>Get stuff</button>
  );
};

export default GetStuff;
