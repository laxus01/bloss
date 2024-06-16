import { Images } from "../interfaces/interfaces";

export const CircularImage = ({ src, size }: Images) => {
  return (
    <>
    {size === 35 && (<img src={src} className="w-[35px] h-[35px] rounded-full object-cover" />) }
    {size === 70 && (<img src={src} className="w-[85px] h-[85px] rounded-full object-cover" />)}
    </>
  );
};
