import { useFavourites } from "../FavCharacterContext";
import { useState } from "react";

const Navigation: React.FC<{ currentPage: number; setCurrentPage: (page: number) => void }> = ({
  currentPage,
  setCurrentPage,
}) => {
  const { favourites, setShowFavourites } = useFavourites();
  const [faves, setFaves] = useState<boolean>(false);

  const nextPage = () => {
    const newPageNumber = currentPage + 1;
    setCurrentPage(newPageNumber);
    setFaves(false);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const newPageNumber = currentPage - 1;
      setCurrentPage(newPageNumber);
      setFaves(false);
    }
  };

  const toggleFavourites = (showFaves: boolean) => {
    setFaves(!faves);
    if (showFaves) setShowFavourites(true);
    else {
      setCurrentPage(1);
      setShowFavourites(false);
    }
  };

  return (
    <div className="navigation">
      <div className="navigation__item">
        <button className="navigation__button" onClick={prevPage} disabled={currentPage === 1}>
          Prev Page
        </button>
      </div>
      {favourites.length > 0 && (
        <div className="navigation__item">
          <button className="navigation__button" onClick={() => toggleFavourites(!faves)}>
            {faves ? "Show All" : "Show Favourites"}
          </button>
        </div>
      )}
      <div className="navigation__item">
        <button className="navigation__button" onClick={nextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Navigation;
