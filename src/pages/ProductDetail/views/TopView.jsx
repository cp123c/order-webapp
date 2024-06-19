import React from "react";
import { ArrowLeft, Share2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
function TopView() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };

  return (
    
    <div className="fixed top-0 bg-slate-500 w-full h-40">
      <div className="w-full h-full overflow-hidden">
        <img className="object-cover" src="/home3.jpg" alt="" />
      </div>
      <div className="fixed top-0 w-full flex justify-between p-5">
        <div
          className="rounded-full bg-white flex items-center w-[32px] h-[32px] p-1"
          onClick={backToHome}
        >
          <ArrowLeft />
        </div>
        <div className="flex gap-2">
          <div className="rounded-full bg-white flex gap-2 items-center px-3">
            <Users size={16} />{" "}
            <span className="text-sm font-semibold">Group order</span>
          </div>
          <div className="rounded-full bg-white flex items-center w-[32px] h-[32px] p-1">
            <Share2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopView;
