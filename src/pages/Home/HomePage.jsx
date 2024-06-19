import "../../App.css";
import { DATA_1, DATA_2, HOME_SLIDE } from "../../dummyData/listData";
import TopView from "./views/TopView";
import CatergorySelectRow from "./views/CatergorySelectRow";
import ColumnSelectList from "./views/ColumnSelectList";
import BannerSlide from "./views/BannerSlide";
import FoodDisplayHorizontalList from "./views/FoodDisplayHorizontalList";
import FoodDisplayVerticalList from "./views/FoodDisplayVerticalList";
import Cart from "@components/Cart";

const Home = () => {
  return (
    <>
      <main className="relative flex flex-col min-h-screen">
        <div className="flex-grow flex-1">
          <div className="h-36 border-b-2 bg-gradient-to-r from-[#76d18c] to-[#4dbcc9] relative">
            <TopView />
          </div>
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
          <div className="px-7 relative">
            <ColumnSelectList />
            <BannerSlide data={HOME_SLIDE} />
            <FoodDisplayHorizontalList title="Order Again" data={DATA_1} />
            <FoodDisplayVerticalList data={DATA_2} />
          </div>
        </div>
        <Cart/>
      </main>
    </>
  );
};

export default Home;
