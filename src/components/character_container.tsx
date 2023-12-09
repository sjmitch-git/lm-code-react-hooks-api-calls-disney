import React, { useEffect, useState } from "react";
import { DisneyCharacter } from "../disney_character";
import Character from "./character";
import { useFavourites } from "../FavCharacterContext";

interface CharacterContainerProps {
  characters: Array<DisneyCharacter>;
}

const CharacterContainer: React.FC<CharacterContainerProps> = ({ characters }) => {
  const { favourites, showFavourites } = useFavourites();
  const [data, setData] = useState(characters);
  useEffect(() => {
    if (showFavourites) setData(favourites);
    else setData(characters);
  }, [characters, showFavourites, favourites]);

  return (
    <div className="card-container">
      {data.map((character) => (
        <Character key={character._id} character={character} />
      ))}
    </div>
  );
};

export default CharacterContainer;
