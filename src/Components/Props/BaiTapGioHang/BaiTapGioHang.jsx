import React, { Component } from 'react'
import DanhSachSanPhamGioHang from './DanhSachSanPhamGioHang'
import ModalGioHang from './ModalGioHang'
 


const  phoneData = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
  ]


export default class BaitTapGioHang extends Component {

    constructor(props){
        super(props);
        this.state = {
            gioHang:[{
                "maSP": 1, "tenSP": "VinSmart Live", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg","soLuong":1
            }]
        }
    }


    themGioHang=(sanPhamChon)=>{
        //B1 : Từ sp đc chọn tạo ta sp gioHang
        let spGioHang = {
            "maSP": sanPhamChon.maSP, "tenSP": sanPhamChon.tenSP, "giaBan": sanPhamChon.giaBan, "hinhAnh":sanPhamChon.hinhAnh,"soLuong":1
        }
        //Kiểm tra spChon có trong giỏ hàng chưa
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP ===spGioHang.maSP);
        if (index !== -1)
        {//Sản phẩm đc click đã có trong this.state.gioHang
            gioHangCapNhat[index].soLuong += 1;
        }else
        {
            //Sản phẩm đc click chứa có trong this.state.gioHang
            gioHangCapNhat.push(spGioHang);
        }
        //Set state để component render lại
        this.setState({
            gioHang:gioHangCapNhat
        })
    }
    xoaSanPham=(maSP)=>{
    //   let spGioHang = {
    //     "maSP": sanPhamChon.maSP, "tenSP": sanPhamChon.tenSP, "giaBan": sanPhamChon.giaBan, "hinhAnh":sanPhamChon.hinhAnh,"soLuong":1
    // }
    // //Kiểm tra spChon có trong giỏ hàng chưa
    // var gioHangCapNhat = [...this.state.gioHang];
    // let index = gioHangCapNhat.filter(sp => sp.maSP ===spGioHang.maSP);
    var gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== maSP)
    this.setState({
      gioHang:gioHangCapNhat
    })

    }



    tangGiamSoLuong =(maSP,tangGiam)=>{ //Tăng : true , giảm : false
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP)
        if (tangGiam){
          gioHangCapNhat[index].soLuong +=1;
        } else
        {
          if (gioHangCapNhat[index].soLuong>1)
          {
            gioHangCapNhat[index].soLuong -=1
          }
        }
        //render lại giao diện
        this.setState({
          gioHang:gioHangCapNhat
        })
    }
  render() {

    
    let tongSoLuong = this.state.gioHang.reduce((tsl,spGH,index)=>{
        return tsl += spGH.soLuong
    },0)

   
    return (
      <div className='container'>
        <h3 className='text-center text-success'>Bài Tập Giỏ Hàng</h3>
        <ModalGioHang tangGiamSoLuong={this.tangGiamSoLuong} xoaSanPham={this.xoaSanPham} gioHang={this.state.gioHang}/>
        <div className="text-right"><span className='text-danger' style={{cursor:"pointer",fontSize:"17px",fontWeight:'bold'}}data-bs-toggle="modal" data-bs-target="#modalId" >Giỏ hàng({tongSoLuong})</span></div>
        <DanhSachSanPhamGioHang  themGioHang={this.themGioHang} mangSanPham={phoneData}/>
      </div>
    )
  }
}
