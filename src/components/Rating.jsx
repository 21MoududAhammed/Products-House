import { useState } from "react";
import { FaStar, FaRegStar  } from "react-icons/fa";
export default function Rating({rating}) {
    const fullStar = Math.round(rating);
    const emptyStar = 5 - fullStar;
    const starsArray = [...Array(fullStar).fill(<FaStar/>), ...Array(emptyStar).fill(<FaRegStar/>)]

  return (
    <div className="flex gap-[2px] text-[#f59e0b] mt-5">
      {
        starsArray.map((star,index) => <span key={index}>{star}</span>)
      }
    </div>
  );
}
