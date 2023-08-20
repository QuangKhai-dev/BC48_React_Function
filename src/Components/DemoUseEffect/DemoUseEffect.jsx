import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemProduct from './ItemProduct';

const DemoUseEffect = () => {
  const [like, setLike] = useState(1);
  const [data, setData] = useState([]);
  const [heart, setHeart] = useState(1);
  const [id, setId] = useState(1);
  const [item, setItem] = useState({});
  // useEffect này hoạt động dựa trên việc component render
  useEffect(() => {
    console.log('tôi là useEffect');
  });

  // lifecycle ComponentDidmount
  // useEffect truyền vào một array parameter rỗng sẽ chạy một lần đầu tiên khi component xuất hiện
  useEffect(() => {
    console.log('tôi là component didmount');
    getAllProduct();
  }, []);

  // useEffect này sẽ chạy dựa trên sự thay đổi render của giá trị được truyền vào bên trong array tham số
  useEffect(() => {
    getProductById(id);
  }, [id]);

  const getAllProduct = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://shop.cyberlearn.vn/api/Product',
      });
      setData(res.data.content);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (id) => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      });
      console.log(res);
      // setITem lại để lấy dữ liệu
      setItem(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(id);

  return (
    <div>
      <p>{like}</p>
      <button
        className="bg-orange-500 rounded-lg text-white py-2 px-4"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Tăng like
      </button>
      <button
        className="bg-orange-500 rounded-lg text-white py-2 px-4"
        onClick={() => {
          setHeart(heart + 1);
        }}
      >
        Tăng tim
      </button>
      <ItemProduct item={item} />
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {data.map((item, index) => {
            // const { name, image, shortDescription } = item;
            return <ItemProduct item={item} setId={setId} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DemoUseEffect;
