import FavoriteIcon from "@mui/icons-material/Favorite";

export const Like = () => {
  return (
    <div className="absolute ml-[60px] mt-[50px]">
      <div className="flex justify-center items-center w-[35px] h-[35px] bg-white rounded-full">
        <FavoriteIcon sx={{ color: "#53c629" }} />
      </div>
    </div>
  );
};
