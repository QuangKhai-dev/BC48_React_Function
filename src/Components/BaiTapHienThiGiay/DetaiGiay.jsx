import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getDetailGiay,
  randomReleaseProduct,
} from '../../redux/slice/giaySlice';
import { useDispatch, useSelector } from 'react-redux';
import ItemGiay from './ItemGiay';
const DetaiGiay = () => {
  // useParams
  const params = useParams();
  // useDispatch
  const dispatch = useDispatch();
  const { detailGiay, releaseProduct } = useSelector((state) => state.giay);
  console.log(detailGiay);
  console.log(releaseProduct);
  // console.log(params);

  useEffect(() => {
    // getDetailGiay sẽ tương đương với action ở dưới redux thường
    // ở toolkit không cần truyền type
    dispatch(getDetailGiay(params.id));
    dispatch(randomReleaseProduct());
  }, [params.id]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-5">
        {/* // chia cấu trúc layout thành 7-5  */}
        <div className="col-span-7">
          <img src={detailGiay.image} alt="" />
        </div>
        <div className="col-span-5">
          <h3 className="text-2xl font-bold mb-5">{detailGiay.name}</h3>
          <p className="text-xl font-bold">{detailGiay.price}</p>
          <p className="text-lg font-bold">{detailGiay.description}</p>
          {/* // release product  */}
          <div className="grid grid-cols-3 gap-3">
            {releaseProduct?.map((item) => {
              console.log(item);
              return <ItemGiay item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetaiGiay;
