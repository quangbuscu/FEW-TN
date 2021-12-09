import React, {useState} from 'react';
import './styles.css'
import { useHistory } from "react-router-dom";
import Pagination from "react-js-pagination";
require("bootstrap/dist/css/bootstrap.css");

function Bill() {
    const history = useHistory();
    const [page, setPage] = useState(1);

    return (
        <div className='mainBill' style={{height: window.innerHeight - 80}}>
            <div className='viewMainBill'>
                <div className='viewHeaderBill'>
                    <h1>QUẢN LÝ ĐƠN HÀNG</h1>
                    <table>
                        <tr style={{height: 54}}>
                            <th>Trạng thái</th>
                            <th>Mã đơn hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Ngày đặt</th>
                            <th>Chi tiết</th>
                        </tr>
                        <tr style={{height: 80}}>
                            <th>V</th>
                            <td>HD1111</td>
                            <td>Điền</td>
                            <td>{new Date().toISOString()}</td>
                            <td className='detailText' onClick={()=>{
                                history.push('/detail-bill')
                            }}><a href=''>Xem chi tiết</a></td>
                        </tr>
                    </table>
                    <div className='page'>
                        <Pagination
                            activePage={page}
                            itemsCountPerPage={10}
                            totalItemsCount={100}
                            pageRangeDisplayed={5}
                            onChange={(p)=>{
                                setPage(p)
                            }}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bill;
