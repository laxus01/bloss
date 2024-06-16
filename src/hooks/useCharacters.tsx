import { useState } from "react";
import { Characters } from "../interfaces/interfaces";

export const useCharacters = () => {

  const [modifiedData, setModifiedData] = useState<Characters[]>([]);
  const [dataResult, setDataResult] = useState<Characters[]>([]);

  return {
    dataResult,
    setDataResult,
    modifiedData,
    setModifiedData,
  };
};
