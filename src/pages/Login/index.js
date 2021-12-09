import React, {useState} from 'react';
import  './styles.css'
import PropTypes from "prop-types";
import DataLocal from "../../functions/dataLocal";

function Login({setToken}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault();
        if (email==='admin' && password === 'admin') {
            DataLocal.saveToken('12323')
            return setToken('123');
        }
        alert('Sai Tài khoản hoặc mật khẩu!')
    }

    return (
        <div className='main' style={{width: window.innerWidth, height: window.innerHeight}}>
            <div className='viewMain'>
                <div style={{display:'flex', height: '100%'}}>
                    <div style={{ height: '100%'}}>
                        <img src={require('../../assets/image/logo.png')} className='imageLogo'/>
                    </div>
                    <div className='viewFormLogin'>
                        <h1 className='text'>Đăng nhập tài khoản của bạn</h1>
                        <form className='form' onSubmit={handleSubmit} encType ="application/x-www-form-urlencoded">
                            <label className='label'>Email:</label>
                            <input
                                className='textInput'
                                type="text" name="email"
                                placeholder={"Nhập địa chỉ email"}
                                onChange={v=> setEmail(v.target.value)}
                            />
                            <label className='label'>Mật khẩu:</label>
                            <input
                                className='textInput'
                                type="password" name="password"
                                placeholder={'Nhập mật khẩu'}
                                onChange={v=> setPassword(v.target.value)}
                            />
                            <input type='submit' className='btnLoin' value={'Đăng nhập'} />
                        </form>

                    </div>
                    </div>
                </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;