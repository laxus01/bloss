import { ItemList } from "../../components/itemList";
import { SearchAndFilters } from "../../components/searchAndFilters";
import { useCharacters } from "../../hooks/useCharacters";

export const ContentLeft = () => {
  const characterInfo = useCharacters();
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full items-center justify-start p-4">
        <label className="text-2xl font-semibold mt-10">
          Rick and Morty list
        </label>
      </div>
      <div className="flex w-full items-center p-4">
        <SearchAndFilters character={characterInfo} />
      </div>
      <div className="w-full p-4 h-full">
        <ItemList character={characterInfo} />
      </div>
    </div>
  );
};
