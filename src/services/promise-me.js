/**
 * TODO: Write 5 fetch requests to an API url using .then()
 * TODO: Write 5 fetch requests using async/await
 */

export const pinballAsync = async () => {
  const resp = await fetch('https://ponball.herokuapp.com/api/v1/machines');
  const data = await resp.json();

  return data;
};

export const pinballThen = () => {
  const data = fetch('https://ponball.herokuapp.com/api/v1/machines').then(
    (data) => data.json()
  );

  return data;
};

export const ghibliAsync = async () => {
  const resp = await fetch(
    'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
  );
  const data = await resp.json();

  return data;
};

export const ghibliThen = () => {
  const data = fetch(
    'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
  ).then((data) => data.json());

  return data;
};

export const dogAsync = async () => {
  const resp = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await resp.json();

  return data;
};

export const dogThen = () => {
  const data = fetch('https://dog.ceo/api/breeds/image/random').then((data) =>
    data.json()
  );
  return data;
};

export const foodAsync = async () => {
  const resp = await fetch('https://foodish-api.herokuapp.com/api/');
  const data = await resp.json();

  return data;
};

export const foodThen = () => {
  const data = fetch('https://foodish-api.herokuapp.com/api/').then((data) =>
    data.json()
  );
  return data;
};

export const amiiboAsync = async () => {
  const resp = await fetch('https://www.amiiboapi.com/api/amiibo/?name=kirby');
  const data = await resp.json();

  return data;
};

export const amiiboThen = () => {
  const data = fetch('https://www.amiiboapi.com/api/amiibo/?name=kirby').then(
    (data) => data.json()
  );
  return data;
};
