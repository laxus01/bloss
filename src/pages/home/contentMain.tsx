import { ContentLeft } from "./contentLeft";
import { ContentRight } from "./contentRight";

export const ContentMain = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[80%]">
      <div className="lg:w-72 w-full bg-[#FBFBFB] overflow-y-scroll no-scrollbar">
        <ContentLeft />
      </div>
      <div className="flex-1 bg-white">
        <ContentRight />
      </div>
    </div>
  );
};
