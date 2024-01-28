import { message } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardBook = ({
  rating,
  title,
  page,
  author,
  image,
  id,
  updateFavorites,
}) => {
  const getStarColor = (index) => {
    return index < rating ? "text-yellow-500" : "text-slate-600";
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const { data } = await axios({
        url: "http://localhost:3000/favorite",
        method: "POST",
        headers: {
          authorization: localStorage.getItem("authorization"),
        },
        data: {
          BookId: id,
        },
      });

      message.success("Berhasil Menambahkan ke Favorite");
      navigate("/");
      updateFavorites();
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  return (
    <div className="w-[280px] h-[150px] flex justify-between bg-white rounded-lg ">
      <div className="w-[40%] h-full">
        <img
          src={
            image.startsWith("upload")
              ? `http://localhost:3000/${image}`
              : image
          }
          alt="buku"
          className="object-cover h-[100%] w-full bg-slate-700 rounded-l-lg "
        />
      </div>
      <div className="w-[60%] h-full flex flex-col px-2 py-3 gap-0.5">
        <div className="h-[25%]">
          <p className="font-serif leading-4 text-[16px]">{title}</p>
        </div>
        <div className="h-[15%] flex items-center">
          <p className="font-normal text-[12px] text-slate-600">{author}</p>
        </div>
        <div className="h-[15%] flex items-center">
          <p className="font-normal text-[12px] text-slate-600">
            {page ? `${page} page` : ""}
          </p>
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
        <div className="h-[45%] w-ful flex justify-center items-end">
          <button
            className="w-[200px] h-[25px] bg-slate-800  text-white text-[10px] rounded-md"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Add Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
