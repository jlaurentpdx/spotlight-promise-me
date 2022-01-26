import { useEffect } from 'react';
import {
  fetchPinballAsync,
  fetchPinballThen,
  fetchGhibliAsync,
  fetchGhibliThen,
  fetchDogAsync,
  fetchDogThen,
  fetchFoodAsync,
  fetchFoodThen,
} from './services/promise-me';

export default function App() {
  useEffect(async () => {
    const async = await fetchFoodAsync();
    console.log('async', async);
    const then = await fetchFoodThen();
    console.log('then', then);
  }, []);

  return <h1>Hello World</h1>;
}
