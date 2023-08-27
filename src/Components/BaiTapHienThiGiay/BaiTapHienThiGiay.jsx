import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ItemGiay from './ItemGiay';

const BaiTapHienThiGiay = () => {
  // hooks giúp gọi dữ liệu từ redux về
  // state đại diện cho reducer bên trong store
  const { arrGiay } = useSelector((state) => state.giay);
  console.log(arrGiay);

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center text-3xl">
        Bài Tập Hiển Thị Một Trang Bán Giày
      </h1>
      <div className="container mx-auto">
        {/* // grid  */}
        <div className="grid grid-cols-4 gap-3">
          {arrGiay.map((item, index) => {
            return <ItemGiay item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BaiTapHienThiGiay;
