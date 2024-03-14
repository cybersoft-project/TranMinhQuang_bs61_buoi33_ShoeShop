import React, { useState } from "react";
import Child from "./Child";

const Ex_DemoState = () => {
  //Yêu cầu: thực hiện tạo ra một biến chứa giá trị là số 1, sau đó tạo ra một button cứ click vào sẽ tăng giá trị thêm một đơn vị
  // let number = 1;
  // state, phương thức giúp cập nhật state, các giá trị trryeefn vào trong ueState sẽ là giá trị mặc định cho state
  let [number, setNumber] = useState(1);
  let [hoTen, setHoTen] = useState();
  return (
    <div>
      <h1>Demo về State</h1>
      <p>Number: {number}</p>
      <button
        className="py-2 px-4 text-white bg-orange-500 rounded"
        onClick={() => {
          let newNumber = number + 1;
          setNumber(number);
        }}
      >
        Tăng đơn vị
        {/* //Thực hiện tạo props hoTen cho component Child  */}
      </button>
      <Child hoTen={hoTen} setHoTen={setHoTen}></Child>
    </div>
  );
};

export default Ex_DemoState;
