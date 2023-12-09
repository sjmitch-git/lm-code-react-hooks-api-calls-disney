import React, { useState, useContext } from "react";
import { DisneyCharacter } from "./disney_character";

interface FavouritesContextProps {
  favourites: DisneyCharacter[];
  toggleFavourites: (favs: DisneyCharacter) => void;
  showFavourites: boolean;
  setShowFavourites: (show: boolean) => void;
}

const FavouritesContext = React.createContext<FavouritesContextProps>({
  favourites: [],
  toggleFavourites: () => null,
  showFavourites: false,
  setShowFavourites: () => null,
});

export function useFavourites() {
  return useContext(FavouritesContext);
}

export function FavCharacterProvider({ children }: { children: React.ReactNode }) {
  const [characterFavourites, setCharacterFavourites] = useState<Array<DisneyCharacter>>([]);
  const [showFavourites, setShowFavourites] = useState<boolean>(false);

  const toggleFavourites = (character: DisneyCharacter) => {
    if (!characterFavourites.some((item) => item._id === character._id)) {
      setCharacterFavourites([...characterFavourites, character]);
    } else {
      const updatedFavourites = characterFavourites.filter((item) => item._id !== character._id);
      setCharacterFavourites(updatedFavourites);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites: characterFavourites,
        toggleFavourites: toggleFavourites,
        showFavourites: showFavourites,
        setShowFavourites: setShowFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
