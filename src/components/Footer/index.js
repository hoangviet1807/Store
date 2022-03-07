import React from "react";
import "./style.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="social-media">
          <h2>FOLLOW US</h2>
          <div className="icon-social-media">
            <div>
              <ion-icon size="large" name="logo-facebook"></ion-icon>
            </div>
            <div>
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </div>
          </div>
        </div>
        <div className="contact">
          <h2>SUPPORT</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Điều khoản</li>
            <li>Hướng dẫn mua hàng</li>
            <li>Chính sách đổi trả</li>
            <li>Bảo mật thông tin khách hàng</li>
          </ul>
        </div>

        <div className="store">
          <h2>Hệ thống cửa hàng</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <ion-icon name="location"></ion-icon> Quy Nhơn
            </li>
            <li>
              <ion-icon name="location"></ion-icon> Tuy Phước
            </li>
          </ul>
        </div>
        <div className="location"></div>
      </div>
    </>
  );
};
