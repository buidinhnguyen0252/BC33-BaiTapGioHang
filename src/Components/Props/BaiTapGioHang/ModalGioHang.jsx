import React, { Component } from 'react'

export default class ModalGioHang extends Component {
  render() {
    const {gioHang,xoaSanPham,tangGiamSoLuong}=this.props;
    return (
     <div>
  
  <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document" style={{maxWidth:'800px',width:"800px"}}>
      <div className="modal-content" >
        <div className="modal-header">
          <h5 className="modal-title" id="modalTitleId">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <table className='table'>
            <thead>
            <tr>
                <td>Mã SP</td>
                <td>Hình Ảnh</td>
                <td>Tên SP</td>
                <td>Số lượng</td>
                <td>Đơn Giá</td>
                <td>Thành Tiền</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
                {gioHang.map((spGH,index)=>{
                    return(
                        <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td><img src={spGH.hinhAnh} alt="" width={50} height={100}/></td>
                    <td>{spGH.tenSP}</td>
                    <td>
                      <button onClick={()=>{
                        tangGiamSoLuong(spGH.maSP ,  true)
                      }} className='btn btn-danger'>+</button>
                      {spGH.soLuong}
                      <button onClick={()=>{
                        tangGiamSoLuong(spGH.maSP , false)}}  className='btn btn-danger'>-</button>
                      </td>
                    <td>{(spGH.giaBan).toLocaleString()}</td>
                    <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                    <td><button onClick={() => {
              xoaSanPham(spGH.maSP);
            }} className='btn btn-success'>Xóa</button></td>
                </tr>
                     )
                })}
                
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
  {/* Optional: Place to the bottom of scripts */}
</div>

    )
  }
}
