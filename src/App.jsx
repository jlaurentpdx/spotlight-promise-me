import { useEffect } from 'react';
import {
  fetchPinballAsync,
  fetchPinballThen,
  fetchGhibliAsync,
  fetchGhibliThen,
  fetchDogAsync,
  fetchDogThen,
} from './services/promise-me';

export default function App() {
  useEffect(async () => {
    const async = await fetchDogAsync();
    console.log('async', async);
    const then = await fetchDogThen();
    console.log('then', then);
  }, []);

  return <h1>Hello World</h1>;
}
