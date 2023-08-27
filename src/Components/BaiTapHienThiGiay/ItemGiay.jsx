import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemGiay = ({ item }) => {
  const navigate = useNavigate();
  // destructuring
  const { image, name, description, id } = item;
  return (
    <div>
      <img src={image} alt="" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="my-3 line-clamp-2">{description}</p>
      <button
        onClick={() => {
          // navigate giúp chuyển hướng sang một component khác
          navigate(`/chi-tiet-giay/${id}`);
        }}
        className="px-3 py-2 bg-black rounded-md text-white"
      >
        Xem chi tiết
      </button>
    </div>
  );
};

export default ItemGiay;
