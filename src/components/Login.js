import React, { Component } from 'react';
import '../css/login.css'
import { NavLink } from "react-router-dom";
class Login extends Component {
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
                        {/* <a className="active" href="/login">登录</a> */}
                        <NavLink to="/login" className="active">登录</NavLink>
                        <b>·</b>
                        {/* <a href="/register" >注册</a> */}
                        <NavLink to="/register" >注册</NavLink>
                    </div>
                    <div className="sign-con">
                        <form>
                            <div className="input-prepend restyle">
                                <input placeholder="手机号或邮箱"/>
                                <i className="iconfont icon-user"></i>
                            </div>
                            <div className="input-prepend">
                                <input type="password" placeholder="密码" />
                                <i className="iconfont icon-suo"></i>
                            </div>
                            <div className="login-q clearFix">
                                <div className="remember-btn">
                                    <input type="checkbox" value="true"  />
                                    <span>记住我</span>
                                </div>
                                <a className="forget-btn">登录遇到问题</a>
                            </div>
                            <button className="sign-in-btn">登录</button>
                            <div className="more-sign">
                                <h6>社交帐号登录</h6>
                                <ul>
                                    <li>
                                        <a>
                                            <i className="iconfont icon-weibo"></i>
                                        </a>
                                    </li>
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
                                    <li>
                                        <a>
                                            <i className="iconfont icon-qita"></i>
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
        document.title = "login"
    }
}

export default Login;
