import React, {useState} from 'react';
import './styles.css'
import { useHistory } from "react-router-dom";
import Pagination from "react-js-pagination";
require("bootstrap/dist/css/bootstrap.css");

function DetailBill() {
    const history = useHistory();
    const [address, setAddress] = useState('Hải Phòng');
    const [phoneNumber, setPhoneNumber] = useState('01232131221');
    const [shipStyle, setShipStyle] = useState('Grab Express');
    const [shipPrice, setShipPrice] = useState('Miễn phí vận chuyển');
    const [payStyle, setPayStyle] = useState('Thanh toán bằng Thẻ nội địa');
    const [status, setStatus] = useState('Thanh toán bằng Thẻ nội địa')
    const [qnt, setQnt] = useState(2)
    const [money, setMoney] = useState(380000)

    return (
        <div className='mainDetailBill' style={{height: window.innerHeight - 80}}>
            <div className='viewMainDetailBill'>
                <div className='viewHeaderDetailBill'>
                    <h1>Chi tiết đơn hàng</h1>
                    <div className='header'>
                        <div className='boxViewHeader'>
                            <h4>NGƯỜI NHẬN HÀNG</h4>
                            <p>Địa chỉ: {address}</p>
                            <p>Số điện thoại: {phoneNumber}</p>
                        </div>
                        <div className='boxViewHeader'>
                            <h4>HÌNH THỨC GIAO HÀNG</h4>
                            <p>{shipStyle}</p>
                            <p>{shipPrice}</p>
                        </div>
                        <div className='boxViewHeader'>
                            <h4>HÌNH THỨC THANH TOÁN</h4>
                            <p>{payStyle}</p>
                        </div>
                        <div className='boxViewHeader'>
                            <h4>TRẠNG THÁI ĐƠN HÀNG</h4>
                            <p>{status}</p>
                        </div>
                    </div>
                    <table>
                        <tr style={{height: 54}}>
                            <td>Sản phẩm</td>
                            <td>Đơn giá</td>
                            <td>Số lượng</td>
                            <td>Thành tiên</td>
                        </tr>
                        <tr style={{height: 54}}>
                            <td>Sản phẩm</td>
                            <td>Đơn giá</td>
                            <td>Số lượng</td>
                            <td>Thành tiên</td>
                        </tr>
                        <tr style={{height: 54}}>
                            <td>Tổng {qnt} sản phẩm</td>
                            <td></td>
                            <td></td>
                            <td>Thành tiền: {money}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DetailBill;
