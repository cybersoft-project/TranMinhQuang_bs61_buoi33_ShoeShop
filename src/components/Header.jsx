// Câu lệnh giúp tạo một arrow function component: rafce
// Tất cả các thẻ về UI được sử dụng trong thư viện đều là thẻ jsx tới từ thư viện react

import React from "react";
const Header = () => {
// Cơ chế data binding 
// Cơ chế giúp đưa các giá trị từ biến, hàm lên giao diên, cách sử dụng gọi một {} và truỳen giá trị từ biến hoặc hàm return về vào bên trong
    let hoTen = "Trần Minh Quang";
    let style = {backgroundColor: "coral",height: "25vh"};
    return<div style={style}>{hoTen} dang o quan 3</div>
};

export default Header
