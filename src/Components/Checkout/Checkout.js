import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import dataDistrict from "../Checkout/Data/districts.json";
import dataProvince from "../Checkout/Data/province.json";
import dataWrad from "../Checkout/Data/wards.json";
import "./Checkout.css";
export default function Checkout() {
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState("Chọn Quận / Huyện");
  const [ward, setWard] = useState("Chọn Phường / Xã");
  const provinceOrigin = dataProvince.map((item) => {
    return { label: item.name, value: item.code };
  });

  const getDistrictsOfProvince = (CityCode) => {
    let data = dataDistrict.filter((item) => {
      return item.parentCode == CityCode;
    });
    return data.map((item) => {
      return {
        label: item.name,
        value: item.code,
        parentCode: item.parentCode,
      };
    });
  };

  const getWardOfDistrict = (CityCode) => {
    let data = dataWrad.filter((item) => {
      return item.parentCode == CityCode;
    });
    return data.map((item) => {
      return {
        label: item.name,
        value: item.code,
        parentCode: item.parentCode,
      };
    });
  };
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `thank`; 
    navigate(path);
  }
  
  return (
    <div className="Checkout-container">
      <Row>
        <Col span={16} className="Checkout-left">
          <h1>GEARVN.COM</h1>
          <ul>
            <li>
              <Link to="">Giỏ hàng</Link>
            </li>
            <li></li>
            <li>Thông tin giao hàng</li>
          </ul>
          <p>Thông tin giao hàng</p>
          <div className="checkout-login">
            <p>Bạn đã có tài khoản?</p>
            <Link to="">Đăng nhập</Link>
          </div>

          <Form>
            <Form.Item
              name="username"
              style={{ marginBottom: "15px" }}
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ tên",
                },
              ]}
            >
              <Input placeholder="Họ và tên" />
            </Form.Item>
            {/* Email and Phone Number  */}
            <Row gutter={8}>
              <Col span={18}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Email không hợp lệ",
                    },
                    {
                      required: true,
                      message: "Vui lòng nhập email",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      pattern: new RegExp(
                        /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/
                      ),
                      message: "Số điện thoại không hợp lệ",
                    },
                    {
                      required: true,
                      message: "Số điện thoại không được để trống",
                    },
                  ]}
                >
                  <Input placeholder="Số điện thoại" />
                </Form.Item>
              </Col>
            </Row>
            {/* Địa chỉ  */}
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Địa chỉ không được trống",
                },
              ]}
            >
              <Input placeholder="Địa chỉ" />
            </Form.Item>
            {/* Select Tỉnh Thành Phố  */}
            <Row>
              <Col span={8}>
                <Form.Item>
                  <Select
                    defaultValue="Chọn tỉnh / thành"
                    options={provinceOrigin}
                    onChange={(value) => {
                      setProvince(value);
                      setDistrict("Chọn Quận / Huyện");
                      setWard("Chọn Phường / Xã");
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <Select
                    value={district}
                    options={getDistrictsOfProvince(province)}
                    onChange={(value) => {
                      setDistrict(value);
                      setWard("Chọn Phường / Xã");
                    }}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <Select
                    value={ward}
                    options={getWardOfDistrict(district)}
                    onChange={(value) => {
                      setWard(value);
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <h2>Phương thức vận chuyển</h2>
            <Input placeholder="Giao hàng tận nơi" disabled="true"></Input>
            <h2 style={{marginTop:'10px', fontWeight:'bold'}}>Phương thức thanh toán</h2>
            <p>Thanh toán khi giao hàng (COD)</p>
            <p>
              Là phương thức khách hàng nhận hàng mới trả tiền. Áp dụng với tất
              cả các đơn hàng trên toàn quốc
            </p>
            <Row style={{ marginTop: "15px" }}>
              <Col span={12}>
                <a>Giỏ hàng</a>
              </Col>
              <Col span={12}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ textAlign: "right", float: "right" }}
                  onClick={()=> {
                    routeChange()
                  }}
                >
                  Hoàn tất đơn hàng
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={8} className="Checkout-right">
          <Row>
            <Col span={8}>
              <img
                src="https://toigingiuvedep.vn/wp-content/uploads/2022/03/hinh-nen-nguoi-nhen-chibi-cute-cho-dien-thoai.jpg"
                style={{ width: "70px", height: "70px", borderRadius: "8px" }}
                alt="Sản phẩm"
              ></img>
            </Col>
            <Col span={8}>
              <p>Tên sản phẩm</p>
            </Col>
            <Col span={8}>
              <p>Giá tiền</p>
            </Col>
          </Row>
          <div className="separate"></div>
          <Row>
            <Col span={12}>
              <Input placeholder="Mã giảm giá"></Input>
            </Col>
            <Col span={12} style={{ display: "flex", justifyContent: "right" }}>
              <button className="btn-discount"><span>Sử dụng</span></button>
            </Col>
          </Row>
          <div className="separate"></div>
          <div className="check-total">
            <div className="check-total__item">
              <p>Tạm Tính</p>
              <p>Phí vận chuyển</p>
            </div>
            <div className="check-total__item">
              <p>Giá</p>
              <p>?</p>
            </div>
          </div>
          <div className="separate"></div>
          <div className="total">
            <p>Tổng cộng</p>
            <p>???????????</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
