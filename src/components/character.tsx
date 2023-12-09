import { DisneyCharacter } from "../disney_character";
import { useFavourites } from "../FavCharacterContext";

interface CharacterProps {
  character: DisneyCharacter;
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  const { favourites, toggleFavourites } = useFavourites();
  const { _id, name, imageUrl } = character;
  const restrictedCharacter = { _id, name, imageUrl };

  return (
    <article className="card">
      <h2>{character.name}</h2>

      <div className="card__button" onClick={() => toggleFavourites(restrictedCharacter)}>
        {!favourites.some((item) => item._id === restrictedCharacter._id)
          ? "Add to Favourites"
          : "Favourited"}
      </div>

      <img className="card__img" src={character.imageUrl} alt={character.name} />
    </article>
  );
};

export default Character;
