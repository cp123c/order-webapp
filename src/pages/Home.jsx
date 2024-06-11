import { ArrowLeft, Heart, ReceiptText, Search } from "lucide-react";
import "../App.css";
import ListRender from "@components/ListRender";
import { DATA_1, DATA_2, HOME_SLIDE } from "../dummyData/listData";
import FoodListRender from "@components/FoodListRender";
import { twMerge } from "tailwind-merge";
import SliderFoodOffer from "@components/SliderFoodOffer";
import SlideUpContent from "@components/SlideUpContent";

const TopView = () => {
  return (
    <div className="absolute bottom-[5px] inset-x-0 py-5 px-7">
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ArrowLeft />
            <div className="flex flex-col text-white">
              <span className="tracking-tighter font-extralight text-sm">
                DELIVERY TO
              </span>
              <span className="font-semibold">USERNAME</span>
            </div>
          </div>
          <div className="flex gap-3 text-white">
            <div className="rounded-full bg-slate-300/50 p-2 ">
              <Heart />
            </div>
            <div className="rounded-full bg-slate-300/50 p-2">
              <ReceiptText />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-x-0">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search />
            </span>
            <input
              className="placeholder:text-sm block bg-white w-full rounded-md py-3 pl-11 pr-3 shadow-md focus:outline-none sm:text-sm"
              placeholder="KyoChon Korean Fried Chicken"
              type="text"
              name="search"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-3 border border-l rounded-tr-md rounded-br-md bg-transparent font-semibold text-sm">
              Search
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

const CatergorySelectRow = () => {
  return (
    <div className="flex overflow-scroll mx-4 my-4">
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col leading-tight">
          <img className="w-12 " src="./chicken.svg" alt="" />
          <span className="font-semibold">Rice</span>
        </div>
      </div>
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col leading-tight">
          <img className="w-12 " src="./chicken.svg" alt="" />
          <span className="font-semibold">Rice</span>
        </div>
      </div>
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col leading-tight">
          <img className="w-12 " src="./chicken.svg" alt="" />
          <span className="font-semibold">Rice</span>
        </div>
      </div>
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col leading-tight">
          <img className="w-12 " src="./chicken.svg" alt="" />
          <span className="font-semibold">Rice</span>
        </div>
      </div>
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col leading-tight">
          <img className="w-12 " src="./chicken.svg" alt="" />
          <span className="font-semibold">Rice</span>
        </div>
      </div>
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col leading-tight">
          <img className="w-12 " src="./chicken.svg" alt="" />
          <span className="font-semibold">Rice</span>
        </div>
      </div>
    </div>
  );
};

const EachCaterBox = ({ title, description, bgColor = "bg-[#ffd2cb]" }) => {
  return (
    <div className={twMerge("p-3 col-span-3 leading-3 rounded-xl", bgColor)}>
      <div>
        <span className="font-bold text-sm">{title}</span>
      </div>
      <span className="text-xs">{description}</span>
    </div>
  );
};

const FourCatergorySelect = () => {
  return (
    <div className="grid grid-cols-6 gap-3 mt-5">
      <EachCaterBox
        title="Near Me"
        description="Get it quick"
        bgColor="bg-[#ffd2cb]"
      />
      <EachCaterBox
        title="28% Off"
        description="Pek Hot Deals"
        bgColor="bg-[#b8e5e0]"
      />
      <EachCaterBox
        title="5-Star Restaurants"
        description="Must-try"
        bgColor="bg-[#ffec8f]"
      />
      <EachCaterBox
        title="Grab Signatures"
        description="2x GrabRewards"
        bgColor="bg-[#e6e9f0]"
      />
    </div>
  );
};

const Home = () => {
  return (
    <main className="relative flex flex-col min-h-screen">
      <div className="flex-grow flex-1">
        <div className="h-36 border-b-2 bg-gradient-to-r from-[#76d18c] to-[#4dbcc9] relative">
          <TopView />
        </div>
        {/*  */}

        <div className="px-7 pt-[2rem] flex gap-5 w-full">
          <button className="bg-slate-100 rounded-full px-3 py-1 font-semibold text-sm float-start">
            <span className="whitespace-nowrap">Delivery</span>
          </button>
          <button className="bg-slate-100 rounded-full px-3 py-1 font-semibold text-sm float-start">
            <span className="whitespace-nowrap">Dine Out: 30% Off</span>
          </button>
          <button className="bg-slate-100 rounded-full px-3 py-1 font-semibold text-sm float-start">
            <span className="whitespace-nowrap"> Pickup</span>
          </button>
        </div>

        <CatergorySelectRow />

        <div className="px-7">
          <FourCatergorySelect />
          {/* order now */}
          <SliderFoodOffer data={HOME_SLIDE} />
          {/* order again*/}
          <ListRender title="Order Again" data={DATA_1} />
          {/*  */}
          <FoodListRender data={DATA_2} />
        </div>
      </div>
      <SlideUpContent/>
    </main>
  );
};

export default Home;
