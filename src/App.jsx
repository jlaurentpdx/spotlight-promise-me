import { useEffect } from 'react';
import {
  fetchPinballAsync,
  fetchPinballThen,
  fetchGhibliAsync,
  fetchGhibliThen,
} from './services/promise-me';

export default function App() {
  useEffect(async () => {
    const resp = await fetchGhibliThen();
    console.log('resp', resp);
  }, []);

  return <h1>Hello World</h1>;
}
