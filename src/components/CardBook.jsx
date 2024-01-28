import React from "react";

const CardBook = ({ rating }) => {
  const getStarColor = (index) => {
    return index < rating ? "text-yellow-500" : "text-slate-600";
  };

  return (
    <div className="w-[230px] h-[130px] flex justify-between bg-slate-100">
      <div className="w-[40%] h-full flex bg-slate-300">
        <img src="" alt="buku" className="object-cover h-full w-full" />
      </div>
      <div className="w-[60%] h-full flex flex-col px-2 py-1 gap-0.5">
        <div className="h-[25%]">
          <p className="font-serif leading-4 text-[16px]">
            Judul Buku Panjang sekali
          </p>
        </div>
        <div className="h-[15%] flex items-center">
          <p className="font-normal text-[12px] text-slate-600">by penulis</p>
        </div>
        <div className="h-[15%] flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`text-[14px] ${getStarColor(index)} mr-1`}
            >
              &#9733;
            </span>
          ))}
        </div>
        <div className="h-[40%]">
          <p className="text-[10px] text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            magnam
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
