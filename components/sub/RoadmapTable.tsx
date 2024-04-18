import RoadmapCard from "./RoadmapCard";

const RoadmapTable = () => {
  return (
    <div className=" max-w-5xl mx-auto w-full grid grid-cols-9 px-2">
      <div className=" col-span-4 w-full h-full ">
        <RoadmapCard
          phase="1"
          context="LAUNCH MEME COIN ALONG WITH AGGRESSIVE MARKETING CAMPAIGN."
        />
      </div>
      <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-0.5 bg-[hsla(0,0%,100%,.05)]"></div>
        <div className="absolute rounded-full bg-[#0f051d] z-10 border-[hsla(0,0%,100%,.05)] border-2">
          <div className=" bg-gradient-to-tr from-[#2600f3] to-[#ff00ea] w-3 h-3 m-1.5 rounded-full"></div>
        </div>
      </div>
      <div className="col-span-4 w-full h-full"></div>

      <div className="col-span-4 w-full h-full"></div>
      <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-0.5 bg-[hsla(0,0%,100%,.05)]"></div>
        <div className="absolute rounded-full bg-[#0f051d] z-10 border-[hsla(0,0%,100%,.05)] border-2">
          <div className=" bg-gradient-to-tr from-[#2600f3] to-[#ff00ea] w-3 h-3 m-1.5 rounded-full"></div>
        </div>
      </div>
      <div className=" col-span-4 w-full h-full ">
        <RoadmapCard
          phase="2"
          context="LAUNCH NFT COLLECTIBLES GEARED TOWARDS CHILDREN AS AN INTRODUCTION TO CRYPTO."
        />
      </div>

      <div className=" col-span-4 w-full h-full ">
        <RoadmapCard phase="3" context="LAUNCH REAL-LIFE VIC-20 TOY ROBOT." />
      </div>
      <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-0.5 bg-[hsla(0,0%,100%,.05)]"></div>
        <div className="absolute rounded-full bg-[#0f051d] z-10 border-[hsla(0,0%,100%,.05)] border-2">
          <div className=" bg-gradient-to-tr from-[#2600f3] to-[#ff00ea] w-3 h-3 m-1.5 rounded-full"></div>
        </div>
      </div>
      <div className="col-span-4 w-full h-full"></div>

      <div className="col-span-4 w-full h-full"></div>
      <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-0.5 bg-[hsla(0,0%,100%,.05)]"></div>
        <div className="absolute rounded-full bg-[#0f051d] z-10 border-[hsla(0,0%,100%,.05)] border-2">
          <div className=" bg-gradient-to-tr from-[#2600f3] to-[#ff00ea] w-3 h-3 m-1.5 rounded-full"></div>
        </div>
      </div>
      <div className=" col-span-4 w-full h-full ">
        <RoadmapCard
          phase="4"
          context="BE ACQUIRED BY ELON MUSK AS THE OFFSPRING TO OPTIMUS."
        />
      </div>
    </div>
  );
};

export default RoadmapTable;
