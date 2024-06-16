import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { useState } from "react";
import { Botton } from "./bottons";

export const SearchAndFilters = ({ character }: any) => {
  const { dataResult, modifiedData, setModifiedData } = character;
  const [stateModal, setStateModal] = useState<boolean>(false);

  const filterSearch = (text: string) => {
    const textLower = text.toLowerCase();
    if (text.length === 0) {
      setModifiedData(dataResult);
    } else {
      const filter = modifiedData.filter(function (i: any) {
        return (
          i.species.toLowerCase().includes(textLower) ||
          i.status.toLowerCase().includes(textLower) ||
          i.gender.toLowerCase().includes(textLower)
        );
      });
      setModifiedData(filter);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full h-[50px] items-center bg-[#f3f4f6] rounded-md p-2">
        <span className="text-gray-500">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="flex-grow px-2 py-1 outline-none"
          placeholder="Search or filter results"
          style={{ backgroundColor: "#f3f4f6" }}
          onChange={(e) => {
            filterSearch(e.target.value);
          }}
        />
        <span
          className="text-gray-500"
          onClick={() => setStateModal(!stateModal)}
        >
          <TuneIcon />
        </span>
      </div>
      {stateModal && (
        <div className="flex flex-col w-[343px] h-[278px] mt-14 rounded-lg shadow-lg p-5 bg-white z-10 fixed">
          <div>
            <label className="text-gray-500">Characters</label>
          </div>
          <div className="flex justify-around w-full mt-3">
            <Botton text={"All"} />
            <Botton text={"Starred"} />
            <Botton text={"Other"} />
          </div>
          <div className=" mt-4">
            <label className="text-gray-500">Specie</label>
          </div>
          <div className="flex justify-around w-full mt-3">
            <Botton text={"All"} />
            <Botton text={"Human"} />
            <Botton text={"Alien"} />
          </div>
          <div className="mt-2">
            <button
              type="button"
              className="w-full px-5 py-2.5 text-sm text-white bg-purple-900 hover:bg-blue-900 focus:outline-none focus:ring-blue-300 rounded-lg text-center "
            >
              Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
