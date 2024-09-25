import { useEffect, useState } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character?page=1';

export default function Peticiones2() {
  const [characters, setCharacters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoaded(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setIsLoaded(false);
      })
      .catch(() => {
        setError('Hubo un error');
      });
  }, []);

  type Character = {
    name: string;
  };

  return (
    <>
      {isLoaded ? (
        <p>{error}</p>
      ) : (
        <ul>
          {characters.map((character: Character) => {
            return <li key={character.name}>{character.name}</li>;
          })}
        </ul>
      )}
    </>
  );
}