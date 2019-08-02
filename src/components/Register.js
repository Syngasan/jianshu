import React, { Component } from 'react';
import '../css/register.css'
import { NavLink } from "react-router-dom";
class Register extends Component {
    render() {
        return (
            <div className="sign">
                <div className="logo">
                    <a href="/">
                        <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="Logo" />
                    </a>
                </div>
                <div className="main">
                    <div className="title">
                        {/* <a  href="/login" >登录</a> */}
                        <NavLink to="/login">登录</NavLink>
                        <b>·</b>
                        {/* <a  className="active" href="/register">注册</a> */}
                        <NavLink to="/register" className="active">注册</NavLink>
                    </div>
                    <div className="sign-con">
                        <form>
                            <div className="input-prepend restyle">
                                <input placeholder="您的昵称"/>
                                <i className="iconfont icon-user"></i>
                            </div>
                            <div className="input-prepend restyle no-radius">
                                <input placeholder="手机号"/>
                                <i className="iconfont icon-xiazai"></i>
                            </div>
                            <div className="input-prepend">
                                <input type="password" placeholder="设置密码" />
                                <i className="iconfont icon-suo"></i>
                            </div>
                        
                            <button className="sign-in-btn1">注册</button>
                            <p className="sign-up-msg" >点击 “注册” 即表示您同意并愿意遵守简书<br /><a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>和<a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a>。</p>
                            <div className="more-sign">
                                <h6>社交帐号注册</h6>
                                <ul>
                                  
                                    <li>
                                        <a>
                                            <i className="iconfont icon-weixin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="iconfont icon-qq"></i>
                                        </a>
                                    </li>
                                   
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        window.onscroll = null;
        document.title = "register"
    }
}

export default Register;
