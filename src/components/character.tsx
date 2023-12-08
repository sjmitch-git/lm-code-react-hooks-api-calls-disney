import { DisneyCharacter } from "../disney_character";

interface CharacterProps {
  character: DisneyCharacter;
  characterFavourites: Array<number>;
  updateFavourites: (favourites: any) => void;
}

const Character: React.FC<CharacterProps> = ({
  character,
  characterFavourites,
  updateFavourites,
}) => {
  function toggleFavouriteForCharacter(characterId: number) {
    if (!characterFavourites.includes(characterId)) {
      // add to favourites
      updateFavourites([...characterFavourites, characterId]);
    } else {
      // remove from favourites
      const updatedFavourites = characterFavourites.filter((id) => id !== characterId);
      updateFavourites(updatedFavourites);
    }
  }
  return (
    <article className="card">
      <h2>{character.name}</h2>

      <div className="card__button" onClick={() => toggleFavouriteForCharacter(character._id)}>
        {!characterFavourites.includes(character._id) ? "Add to Favourites" : "Favourited"}
      </div>

      <img className="card__img" src={character.imageUrl} alt={character.name} />
    </article>
  );
};

export default Character;
