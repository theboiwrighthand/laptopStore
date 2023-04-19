import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-promotion">
          <form action="" className="footer-promotion__form">
            <div className="left-footer">
              <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/bg-register.png"
                alt=""
              />
              <span style={{ marginLeft: "30px" }}>
                Mua hàng online với nhiều ưu đãi tại GEARVN
              </span>
            </div>
            <div className="footer-register" style={{ marginLeft: "auto" }}>
              <input
                type="text"
                className="footer-input__field"
                placeholder="Nhập email của bạn"
              />
              <button className="footer-button__register">Đăng ký</button>
            </div>
          </form>
        </div>
        <div
          className="footer-info"
          style={{
            backgroundColor: "#f6f6f6",
            width: "100%",
            padding: "20px 0",
          }}
        >
          <div
            className="footer-info__wrap row"
            style={{ boxSizing: "border-box" }}
          >
            <div className="footer-info__left col-12 col-lg-4">
              <div>
                <h3
                  style={{
                    textTransform: "uppercase",
                    fontSize: "16px",
                    fontWeight: "bold",
                    margin: "0",
                    marginBottom: "5px",
                  }}
                >
                  CÔNG TY TNHH THƯƠNG MẠI GEARVN
                </h3>
                <h3
                  style={{
                    textTransform: "uppercase",
                    fontSize: "16px",
                    fontWeight: "bold",
                    margin: "0",
                    marginBottom: "5px",
                  }}
                >
                  EMAIL: CSKH@GEARVN.COM
                </h3>
                <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                  <b style={{ fontSize: "14px" }}>
                    HỆ THỐNG TỔNG ĐÀI MIỄN PHÍ:
                  </b>{" "}
                  (Làm việc từ 08h00 - 21h00)
                </p>
              </div>
              <table className="footer-table">
                <tbody>
                  <tr>
                    <td>Gọi mua hàng</td>
                    <td>
                      <strong>1800 6975</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Hỗ trợ khách hàng</td>
                    <td>
                      <strong>1800 6173</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="footer-policy">
                <a href="">Chính sách bảo hành</a>
                <br />
                <a href="">Chính sách thanh toán</a>
                <br />
                <a href="">Chính sách giao hàng</a>
                <br />
                <a href="">Chính sách bảo mật</a>
              </div>
            </div>
            <div className="footer-info__middle col-12 col-lg-4">
              <a href="">
                <b className="shop-system">Hệ thống cửa hàng:</b>
              </a>
              <p style={{ fontSize: "14px" }}>
                <b style={{ fontSize: "14px" }}>SHOWROOM HCM</b>(làm việc từ
                8h00 - 21h00)
                <br />
                - Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình.
                <br />
                - Địa chỉ 2: 905 Kha Vạn Cân, Phường Linh Tây, Thành phố Thủ
                Đức.
                <br />
                - Địa chỉ 3: 1081 - 1083 Trần Hưng Đạo, Phường 5, Quận 5.
                <br />
                - Địa chỉ 4: 415 An Dương Vương, Phường 10, Quận 6.
                <br />
                <b style={{ fontSize: "14px" }}>SHOWROOM HN</b>(làm việc từ 8h00
                - 12h00)
                <br />
                - Địa chỉ 1: 162 - 164 Thái Hà, Phường Trung Liệt, Quận Đống Đa,
                Hà Nội
                <br />
                - Địa chỉ 2: 460 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng,
                Hà Nội
                <br />
                <a href="">
                  <b className="shop-system">TRUNG TÂM BẢO HÀNH:</b>
                </a>
                <br />
                - Địa chỉ : 436A/71 đường 3/2, Phường 12, Quận 10, Hồ Chí Minh.
                <p style={{fontSize:"14px"}} className='suggest-item'>
                  Mua <a href="">PC Gaming</a>
                  , <a href="">laptop gaming</a>
                  , <a href="">Card mành hình</a>
                  , <a href="">Chuột máy tính</a>
                  , <a href="">màn hình máy tính</a>
                  , <a href="">máy tính để bàn</a>
                  , thiết bị chơi game như PS5 hàng đầu Việt Nam bảo hành chính hãng. Mua online nhận ưu đãi hấp dẫn với nhiều chương trình đặc biệt như ngày 8/3, b2s, noel...
                </p>
              </p>
            </div>
            <div className="footer-info__right col-12 col-lg-4">
              <h3>aHFAHEUFHAUWIEFU</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
