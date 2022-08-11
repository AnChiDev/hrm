import React from 'react';

function Home() {
    return(
      <div className="container">
            <br/>
            <h4>GIỚI THIỆU SẢN PHẨM</h4>
            <br/>
            <h6>CÔNG DỤNG, TÍNH NĂNG ỨNG DỤNG:</h6>
            <p>Đây là ứng dụng để quản lý nhân sự của công ty. Tại thanh điều hướng, người dùng có thể chọn: 
             Home - Nhân viên - Phòng Ban - Bảng lương để di chuyển qua lại giữa các chức năng. Ứng dụng được thiết kế tương thích với nhiều kích thước màn hình thiết bị sử dụng</p>
         
            <h6>Tab Nhân viên: </h6>
            <p>Tab Nhân viên, chúng ta có thể nhìn thấy toàn bộ nhân viên kèm hình ảnh.</p>                
    
            <h6>Chi tiết nhân viên: </h6>
            <p>Tại danh sách nhân viên, khi muốn xem chi tiết về một nhân viên, người dùng chỉ cần chọn ảnh của nhân viên đó.</p>                
         
            <h6>Phòng ban:</h6>
            <p>Hiển thị tất cả các phòng ban trong Công ty, bao gồm tên và số lượng nhân viên từng phòng.</p>
            
            <h6>Bảng lương: </h6>
            <p>Hiển thị bảng lương của tất cả các nhân viên. .</p>
         
            <p>Các tính năng khác của ứng dụng sẽ tiếp tục được cập nhật trong thời gian tới.</p>
   
        </div>
    );
}

export default Home;   