import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    const { sanPham, themGioHang } = this.props;

    return (
      <div className="card text-white bg-primary">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
          width={200}
          height={200}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <button
            onClick={() => {
              themGioHang(sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
