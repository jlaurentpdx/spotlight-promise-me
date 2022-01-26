import { useEffect } from 'react';
import * as fetch from './services/promise-me';

export default function App() {
  useEffect(async () => {
    console.log('amiibo async', await fetch.amiiboAsync());
    console.log('amiibo then', await fetch.amiiboThen());
    console.log('dog async', await fetch.dogAsync());
    console.log('dog then', await fetch.dogThen());
    console.log('food then', await fetch.foodThen());
    console.log('food then', await fetch.foodThen());
    console.log('ghibli then', await fetch.ghibliThen());
    console.log('ghibli then', await fetch.ghibliThen());
    console.log('pinball then', await fetch.pinballThen());
    console.log('pinball then', await fetch.pinballThen());
  }, []);

  return <h1>Hello World</h1>;
}
