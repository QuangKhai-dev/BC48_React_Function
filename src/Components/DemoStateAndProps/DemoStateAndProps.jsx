// rafce
import React, { useState } from 'react';
import DemoProps from './DemoProps';

const DemoStateAndProps = () => {
  // cách khai báo state
  // tên state, tên phương thức setState
  // useState là một hooks của react giúp khởi tạo một state
  const [number, setNumber] = useState(20);
  const [hoTen, setHoTen] = useState('Dũng');

  return (
    <div>
      <p>Number: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-800 duration-500"
      >
        Cộng thêm 1
      </button>
      <DemoProps number={number} hoTen={hoTen} />
    </div>
  );
};

export default DemoStateAndProps;
