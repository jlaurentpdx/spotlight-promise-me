/**
 * TODO: Write 5 fetch requests to an API url using .then()
 * TODO: Write 5 fetch requests using async/await
 */

export const fetchPinballAsync = async () => {
  const resp = await fetch('https://ponball.herokuapp.com/api/v1/machines');
  const data = await resp.json();

  return data;
};

export const fetchPinballThen = () => {
  const data = fetch('https://ponball.herokuapp.com/api/v1/machines').then(
    (data) => data.json()
  );

  return data;
};

export const fetchGhibliAsync = async () => {
  const resp = await fetch(
    'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
  );
  const data = await resp.json();

  return data;
};

export const fetchGhibliThen = () => {
  const data = fetch(
    'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
  ).then((data) => data.json());

  return data;
};
