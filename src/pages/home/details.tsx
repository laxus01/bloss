import { useLocation } from "react-router-dom";
import { CircularImage } from "../../components/circularImage";
import { Like } from "../../components/like";
import { Divider } from "@mui/material";
import { Comments } from "../../components/comments";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  text: string;
  date: number;
}

export const Details = () => {
  const [items, setItems] = useState<Item[]>([]);
  const location = useLocation();
  const characterDetail = location.state || { characterDetail: {} };
  console.log(characterDetail);

  const saveComment = (text: string) => {
    const newItem = {
      id: characterDetail.id,
      text: text,
      date: Date.now(),
    };
    setItems([...items, newItem]);
  };

  useEffect(() => {
    const savedItems = localStorage.getItem("savedItems");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items));
  }, [items]);

  return (
    <div className="w-full p-10">
      <div className="flex w-full items-center justify-start">
        <CircularImage src={characterDetail.image} size={70} />
        <Like />
      </div>

      <div className="flex w-full items-center justify-start">
        <label className="text-2xl font-bold">{characterDetail.name}</label>
      </div>
      <div className="mt-10">
        <div>
          <div>
            <label className="text-md font-[600]">Specie</label>
          </div>
          <div>
            <label className="text-gray-500">{characterDetail.species}</label>
          </div>
        </div>
        <Divider />
        <div className="mt-5">
          <div>
            <label className="text-md font-[600]">Status</label>
          </div>
          <div>
            <label className="text-gray-500">{characterDetail.status}</label>
          </div>
        </div>
        <Divider />
        <div className="mt-5">
          <div>
            <label className="text-md font-[600]">Gender</label>
          </div>
          <div>
            <label className="text-gray-500">{characterDetail.gender}</label>
          </div>
        </div>
        <Divider />
        <div className="mt-5">
          <div>
            <label className="text-md font-[600]">Add coment</label>
          </div>
          <div>
            <Comments saveComment={saveComment} />
          </div>
        </div>
      </div>
      <div className="mt-10">
          <div>
            <label className="text-md font-[600]">Comments ({items.length})</label>
          </div>
        {items.map((i: Item) => (
          <>
            <div className="mt-5">
              <div>
                <label className="text-gray-500">{i.text}</label>
              </div>
            </div>
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
};
