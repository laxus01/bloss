import { CircularImage } from "./circularImage";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { Characters } from "../interfaces/interfaces";
import { Link } from "react-router-dom";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import { gql, useLazyQuery } from "@apollo/client";

  const ALL_PERSONS = gql`
  query FilteredCharacters(
    $status: String
    $species: String
  ) {
    characters(
      filter: {
        status: $status
        species: $species
      }
    ) {
      results {
        id
        image
        name
        species
        status
        gender
      }
    }
  }
`;

export const ItemList = ({ character }: any) => {
  const [getCharacters, result] = useLazyQuery(ALL_PERSONS);
  const { setDataResult, modifiedData, setModifiedData } = character;
  const [order, setOrder] = useState<boolean>(true);  

  const orderCharacters = async () => {
    setOrder(!order);
    let sortedArray = await modifiedData.sort((a: any, b: any) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return order ? -1 : 1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return order ? 1 : -1;
      }
      return 0;
    });
    setModifiedData(sortedArray);
  };


  const filterCharacters = (status: string, species: string) => {
    getCharacters({variables: {status, species}})
  }

  useEffect(() => {
    filterCharacters("", "")
  }, [])

  useEffect(() => {
    if (result.data) {
      const updatedItems = result.data.characters.results.map((item: Characters) => ({
        ...item,
        like: false,
      }));
      setModifiedData(updatedItems);
      setDataResult(updatedItems);
    }
  }, [result.data]);

  const changeLike = (index: number) => {
    setModifiedData((prevData: Characters[]) =>
      prevData.map((item, idx) =>
        idx === index ? { ...item, like: !item.like } : item
      )
    );
  };

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <label className="text-gray-500 text-sm">STARRED CHARACTERS</label>
        <Button onClick={orderCharacters}>
          <SortByAlphaIcon />
        </Button>
      </div>

      {!result.loading ? (
        <ul>
          {modifiedData.map((item: Characters, index: any) => (
            <Link key={item.name} to="/details" state={item}>
              <li
                className={
                  item.like
                    ? "border-b border-gray-200 p-3 bg-[#eee3ff] rounded-lg"
                    : "border-b border-gray-200 p-3"
                }
              >
                <div className="flex">
                  <div className="flex items-center w-1/6">
                    <CircularImage src={item.image} size={35} />
                  </div>
                  <div className="flex flex-col w-4/6">
                    <div>
                      <label className="text-md font-[600]">{item.name}</label>
                    </div>
                    <div>
                      <label className="text-gray-500">{item.species}</label>
                    </div>
                  </div>
                  <div className="w-1/6">
                    <span onClick={() => changeLike(index)}>
                      {item.like ? (
                        <div className="flex justify-center items-center w-[35px] h-[35px] bg-white rounded-full">
                          <FavoriteIcon sx={{ color: "#53c629" }} />
                        </div>
                      ) : (
                        <FavoriteBorderIcon sx={{ color: "#d1d5db" }} />
                      )}
                    </span>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};