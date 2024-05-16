import {
  ArrowLeft,
  ArrowRight,
  Heart,
  ReceiptText,
  Search,
  Tag,
} from "lucide-react";
import "./App.css";
// import Slider from "react-slick";

function App() {
  // const settings = {
  //   className: "center",
  //   infinite: true,
  //   centerPadding: "60px",
  //   arrows:false,
  //   slidesToShow: 1,
  //   swipeToSlide: true,
  //   afterChange: function (index) {
  //     console.log(
  //       `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
  //     );
  //   },
  // };

  return (
    <main className="relative flex flex-col min-h-screen">
      <div className="flex-grow flex-1">
        <div className="h-36 border-b-2 bg-gradient-to-r from-[#76d18c] to-[#4dbcc9] relative">
          <div className="absolute bottom-[5px] inset-x-0  px-7 py-5">
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
        </div>
        {/*  */}
        <div className="pt-[2rem] flex gap-5 px-7 w-full">
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
        {/* <div className="flex overflow-scroll my-4">
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
        </div> */}
        <div className="grid grid-cols-6 gap-3 px-7 mt-5">
          <div className="p-3 col-span-3 leading-3 bg-[#ffd2cb] rounded-xl">
            <div>
              <span className="font-bold text-sm">Near Me</span>
            </div>
            <span className="text-xs">Get it quick</span>
          </div>
          <div className="p-3 col-span-3 leading-3 bg-[#b8e5e0] rounded-xl">
            <div>
              <span className="font-bold text-sm">Near Me</span>
            </div>
            <span className="text-xs">Get it quick</span>
          </div>
          <div className="p-3 col-span-3 leading-3 bg-[#ffec8f] rounded-xl">
            <div>
              <span className="font-bold text-sm">Near Me</span>
            </div>
            <span className="text-xs">Get it quick</span>
          </div>
          <div className="p-3 col-span-3 leading-3 bg-[#e6e9f0] rounded-xl">
            <div>
              <span className="font-bold text-sm">Near Me</span>
            </div>
            <span className="text-xs">Get it quick</span>
          </div>
        </div>
        {/*  */}
        <div className="px-7 w-full">
          <div className="flex py-3">
            <div className="font-bold flex gap-2 text-lg items-center">
              Order Now <ArrowRight className="w-[14px]" />
            </div>
          </div>
          {/* <Slider {...settings}> */}
            <div className="w-[90%]">
              <div className=" overflow-hidden rounded-md">
                <img src="./home3.jpg" className="w-full h-48" alt="" />
              </div>
              <div className=" leading-tight">
                <div className="font-semibold pt-2 w-full">
                  Annyeong, craving for Korean Street Foods
                </div>
                <span className="text-sm">emart24</span>
              </div>
            </div>
            {/* <div>1</div>
            <div>2</div> */}
          {/* </Slider> */}
        </div>
        {/*  */}
        <div className="px-7 w-full">
          <div className="flex py-3">
            <div className="font-bold flex text-lg">Order Again</div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className=" col-span-6">
              <div>
                <img src="./home2.jpg" className="w-full rounded-xl" alt="" />
              </div>
              <div className="leading-tight">
                <div className="font-semibold pt-2 w-full">
                  Pizza hut - Taman XXX
                </div>
                <div className="flex gap-2 items-center py-1">
                  <span className="text-sm">45 mins</span>&#183;
                  <span className="text-sm">2.2km</span>&#183;
                  <span className="text-sm">4.2</span>
                </div>
                <div className="flex gap-2">
                  <div className=" bg-[#fcf2ea] rounded-full px-2 text-xs float-start font-semibold">
                    30% off
                  </div>
                  <div className=" bg-[#fcf2ea] rounded-full px-2 text-xs float-start font-semibold">
                    RM2.00 off
                  </div>
                </div>
              </div>
            </div>
            <div className="h-48 col-span-6">
              <div>
                <img src="./home1.jpg" className="w-full rounded-xl" alt="" />
              </div>
              <div className="leading-tight">
                <div className="font-semibold pt-2 w-full">
                  Pizza hut - Taman XXX
                </div>
                <div className="flex gap-2 items-center py-1">
                  <span className="text-sm">45 mins</span>&#183;
                  <span className="text-sm">2.2km</span>&#183;
                  <span className="text-sm">4.2</span>
                </div>
                <div className="flex gap-2">
                  <div className=" bg-[#fcf2ea] rounded-full px-2 text-xs float-start font-semibold">
                    30% off
                  </div>
                  <div className=" bg-[#fcf2ea] rounded-full px-2 text-xs float-start font-semibold">
                    RM2.00 off
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="px-7 mt-5 pb-2 flex">
          <div className="w-[7rem] h-[4rem] flex items-start justify-center pt-1">
            <img src="./home4.jpg" className=" rounded-xl" alt="" />
          </div>
          <div className="px-2 flex flex-col gap-1">
            <div>
              <span className="font-bold">CHAGEE</span>
            </div>
            <div className="flex gap-1 text-sm">
              <span className="font-semibold">4.7</span>
              <span>&#183;</span>
              <span className=" text-slate-500 tracking-tight">Beverages</span>
            </div>
            <div className="flex gap-1 text-sm">
              <span className=" text-orange-400 font-semibold">Free</span>{" "}
              <s className="text-slate-500">RM 2.00</s> <span>&#183;</span>{" "}
              <span className="font-semibold tracking-tight">40 mins</span>
            </div>
            <div className="rounded-lg bg-[#e2fffc] px-1 inline text-xs">
              Saver Delivery Available
            </div>
            <div className="flex">
              <div className="border rounded-lg px-2 py-1 font-semibold text-xs flex items-center gap-1">
                <Tag size={16} strokeWidth={1} /> Delivery Promo
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
