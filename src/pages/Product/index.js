import React, {useState} from 'react';
import './styles.css'
import { useHistory } from "react-router-dom";
import Pagination from "react-js-pagination";
require("bootstrap/dist/css/bootstrap.css");

function Product() {
    const history = useHistory();
    const [page, setPage] = useState(1);

    return (
        <div className='mainProduct' style={{height: window.innerHeight - 80}}>
            <div className='viewMainProduct'>
                <div className='viewHeaderProduct'>
                    <h1>DANH SÁCH SẢN PHẨM</h1>
                    <img src={require('../../assets/image/ic_add_product.png')}
                         style={{width: 60, height: 60}}
                         onClick={()=>{
                            history.push('/addProduct')
                         }}/>
                </div>
                <table>
                    <tr style={{height: 54}}>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Giá bán</th>
                        <th>Giá Nhập</th>
                        <th>Số lượng</th>
                        <th>Thương hiệu</th>
                        <th>Thao tác</th>
                    </tr>
                    <tr style={{height: 80}}>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Giá bán</th>
                        <th>Giá Nhập</th>
                        <th>Số lượng</th>
                        <th>Thương hiệu</th>
                        <th>Thao tác</th>
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
    );
}

export default Product;
