import React from "react";

const Child = (props) => {
  return (
    <div>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 text-white"
        >
          Họ tên
        </label>
        <input
          onChange={(e) => {
            props.setHoTen(e.target.value);
          }}
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block bg-white-900 border-gray-600  text-white focus:ring-blue-500 focus:border-blue-500"
          placehonder="Vui lòng nhập họ têạ"
          required
        />
      </div>
      {/* Thực hiện tạo một state dùng để chứa họ tên người nhập dữ liệu, state có thể đặt tên là hoTenm sau đó thực hiện tạo sự kiện giúp cập nhật giá trị của state thông qua vieccj người dùng thay đổi dữ liệu input và truyền vào thẻ p tạo ra đoạn nội dung vd. Hôm nay Quang Khải đi học */}
      <p id="content">Hôm nay có bạn {props.hoTen} đi học</p>
    </div>
  );
};

export default Child;
