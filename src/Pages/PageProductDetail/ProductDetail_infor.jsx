import React from "react";
import "./ProductDetail.css";
import ReactMarkdown from "react-markdown";
import { Col, Row, Typography } from "antd";

export default function ProductDetailInfor({ description, cpu, ram }) {

  let result2 = String(description)
  result2 = result2.replaceAll("](/uploads", "](https://backoffice.nodemy.vn/uploads")


  return (
    <>
      {/* DETAIL TABLE */}
      <div className="detail_table">
        <Typography.Title level={2}>THÔNG SỐ KĨ THUẬT :</Typography.Title>
        <table>
          <tr>
            <td>CPU</td>
            <td>{cpu}</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td> {ram}</td>
          </tr>
          <tr>
            <td>Ổ lưu trữ:</td>
            <td>256GB SSD</td>
          </tr>
          <tr>
            <td>Card đồ họa</td>
            <td>M1 8CPU 8GPU</td>
          </tr>
          <tr>
            <td>Màn hình</td>
            <td>13.3 inch (2560x1600), IPS, Led Backlit, True Tone</td>
          </tr>
          <tr>
            <td>Bàn phím</td>
            <td>Magic Keyboard, Touchbar, có LED</td>
          </tr>
          <tr>
            <td>Audio</td>
            <td>Stereo speakers</td>
          </tr>
          <tr>
            <td>Đọc thẻ nhớ</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Kết nối có dây (LAN)</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Kết nối không dây</td>
            <td>Wifi 802.11ac - Bluetooth 5.0</td>
          </tr>
          <tr>
            <td>Bàn phím</td>
            <td></td>
          </tr>
          <tr>
            <td>Webcam</td>
            <td>720p HD</td>
          </tr>
          <tr>
            <td>Cổng giao tiếp</td>
            <td>
              <ul>
                2 Thunderbolt / USB 4 ports with support for:
                <li>Charging</li>
                <li>DisplayPort</li>
                <li>Thunderbolt 3 (up to 40Gb/s)</li>
                <li> USB 3.1 Gen 2 (up to 10Gb/s)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Hệ điều hành</td>
            <td>Mac OS</td>
          </tr>
          <tr>
            <td>Pin</td>
            <td>
              Built in Polymer, 58.2Whr Up to 17 hours wireless web; Up to 20
              hours Apple TV app movie playback
            </td>
          </tr>
          <tr>
            <td>Trọng lượng</td>
            <td>1.4 kg</td>
          </tr>
          <tr>
            <td>Kích thước</td>
            <td>304 x 212 x 156 mm</td>
          </tr>
          <tr>
            <td>Màu sắc</td>
            <td>Xám</td>
          </tr>
          <tr>
            <td>Bảo mật</td>
            <td>Bảo mật dấu vân tay</td>
          </tr>
        </table>
         {/* DETAIL BOTTOM */}
      <Row>
        <Col span={24}>
          <ReactMarkdown>{result2}</ReactMarkdown>
        </Col>
      </Row>
      </div>
     
    </>
  );
}
