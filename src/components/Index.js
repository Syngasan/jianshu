import React, { Component } from 'react';
import Header from '../common/Header'
import '../css/Index.css'
import { Carousel } from 'antd';
import axios from 'axios';
import Totop from '../common/Totop'
import { NavLink } from "react-router-dom";



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            data: ''
        }
    }
    render() {
        document.title="简书 - 创作你的创作"
        return (
            <div >
                <Header />
                <div className="container clearFix">
                    <div className="main">
                        <div className="banner" onMouseOver={() => { this.setState({ isShow: true }) }} onMouseOut={() => { this.setState({ isShow: false }) }} >

                            <p className={this.state.isShow == true ? 'bothBtn bothBtnShow' : 'bothBtn'}>
                                <span className="prev" onClick={() => { this.refs.banner.prev() }}>
                                    <i className="iconfont icon-icon_arrow_left"></i>
                                </span>
                                <span className="next" onClick={() => { this.refs.banner.next() }}>
                                    <i className="iconfont icon-icon_arrow_right"></i>
                                </span>
                            </p>
                            <Carousel autoplay ref="banner">
                                {
                                    (function (_this) {
                                        if (_this.state.data) {
                                            var arr = []
                                            _this.state.data.swpierImg.map((item, index) => {
                                                arr.push(
                                                    <div className="slide-box" key={index}>
                                                        <a target="_blank" href="https://www.jianshu.com/p/80079208bca9?utm_medium=index-banner&amp;utm_source=desktop"><img src={item} alt="540" /></a>
                                                    </div>
                                                )
                                            })
                                            return arr;
                                        }
                                    })(this)
                                }
                            </Carousel>
                        </div>
                        <div id="list-container">
                            <ul className="note-list">
                                {
                                    (function (_this) {
                                        if (_this.state.data) {
                                            var arr = [];
                                            _this.state.data.articleList.map((item, index) => {
                                                arr.push(
                                                    <li className="have-img" key={index}>
                                                        <a className="wrap-img" href="/p/e934d8fa19e5" target="_blank">
                                                            <img className="img-blur-done" src={item.imgUrl} alt="120" />
                                                        </a>
                                                        <div className="note-list-l">
                                                            {/* <a className="title">{item.title}</a> */}
                                                            <NavLink to={'/details/' + item.id} className="title">{item.title}</NavLink>
                                                            <p className="abstract">
                                                                {item.desc}
                                                            </p>
                                                            <div className="meta">
                                                                <span className="jsd-meta">
                                                                    <i className="iconfont icon-lv_zuanshi_fill"></i> 10.6
                                                                </span>
                                                                <a className="nickname" target="_blank" href="/u/899481e05b00">瓜尔佳_半阙</a>
                                                                <a target="_blank" href="/p/e934d8fa19e5#comments">
                                                                    <i className="iconfont icon-liaotianchat52"></i> 42
                                                                </a>
                                                                <span><i className="iconfont icon-aixin"></i> 25</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                            return arr;
                                        }
                                    })(this)
                                }
                            </ul>
                        </div>
                        <a className="load-more" onClick={this.pushList}>阅读更多</a>
                    </div>
                    <div className="aside">
                        <div className="board">
                            <a target="_blank" href="/mobile/club"><img src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt="Banner s club" /></a>
                            <a utm_medium="index-banner-s" target="_blank" href="/mobile/books?category_id=284"><img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="Banner s 7" /></a>
                            <a utm_medium="index-banner-s" target="_blank" href="/publications"><img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="Banner s 5" /></a>
                            <a target="_blank" href="/c/e048f1a72e3d?utm_medium=index-banner-s&amp;utm_source=desktop"><img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="Banner s 6" /></a>
                        </div>
                        <a className="download">
                            <div className="big-qr">
                                <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
                            </div>
                            <img className="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode" />
                            <div className="info">
                                <div className="title">下载简书手机App<i className="iconfont icon-icon_arrow_right"></i></div>
                                <div className="description">随时随地发现和创作内容</div>
                            </div>
                        </a>
                        <a className="ad">
                            <span className="ad-badge">广告</span>
                        </a>
                        <div className="recommended-authors">
                            <div className="title">
                                <span>推荐作者</span>
                                <a className="page-change">
                                    <i className="iconfont icon-shuaxin" ></i>
                                    换一批
                                </a>
                            </div>
                            <ul className="list">
                                <li>
                                    <a href="/u/82854a3500fc?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="avatar">
                                        <img className='user-img' src="//upload.jianshu.io/users/upload_avatars/2587459/9f4cfc0f-88b8-420c-b36e-9741e1191644.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
                                    </a>
                                    <a className="follow" state="0">
                                        <i className="iconfont icon-jiahao2"></i>关注
                                    </a>
                                    <a href="/u/82854a3500fc?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="name">
                                        穿着prada挤地铁
                                    </a>
                                    <p>
                                        写了339.5k字 · 4.5k喜欢
                                    </p>
                                </li>
                                <li>
                                    <a href="/u/82854a3500fc?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="avatar">
                                        <img className='user-img' src="//upload.jianshu.io/users/upload_avatars/2587459/9f4cfc0f-88b8-420c-b36e-9741e1191644.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
                                    </a>
                                    <a className="follow" state="0">
                                        <i className="iconfont icon-jiahao2"></i>关注
                                    </a>
                                    <a href="/u/82854a3500fc?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="name">
                                        穿着prada挤地铁
                                    </a>
                                    <p>
                                        写了339.5k字 · 4.5k喜欢
                                    </p>
                                </li>
                                <li>
                                    <a href="/u/82854a3500fc?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="avatar">
                                        <img className='user-img' src="//upload.jianshu.io/users/upload_avatars/2587459/9f4cfc0f-88b8-420c-b36e-9741e1191644.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
                                    </a>
                                    <a className="follow" state="0">
                                        <i className="iconfont icon-jiahao2"></i>关注
                                    </a>
                                    <a href="/u/82854a3500fc?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="name">
                                        穿着prada挤地铁
                                    </a>
                                    <p>
                                        写了339.5k字 · 4.5k喜欢
                                    </p>
                                </li>
                                <li>
                                    <a href="/u/82854a3500fc?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="avatar">
                                        <img className='user-img' src="//upload.jianshu.io/users/upload_avatars/2587459/9f4cfc0f-88b8-420c-b36e-9741e1191644.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" />
                                    </a>
                                    <a className="follow" state="0">
                                        <i className="iconfont icon-jiahao2"></i>关注
                                    </a>
                                    <a href="/u/82854a3500fc?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="name">
                                        穿着prada挤地铁
                                    </a>
                                    <p>
                                        写了339.5k字 · 4.5k喜欢
                                    </p>
                                </li>
                            </ul>
                            <a href="/recommendations/users?utm_source=desktop&amp;utm_medium=index-users" target="_blank" className="find-more">
                                查看全部<i className="iconfont icon-icon_arrow_right"></i></a>
                            <a className="b-ad">
                                <span className="ad-badge">广告</span>
                            </a>
                        </div>
                    </div>
                </div>
                <Totop />
                <footer className="container">
                    <div className="footer-con">
                        <div className="footer-row1">
                            <a target="_blank" href="http://www.jianshu.com/c/jppzD2">关于简书</a>
                            <em> · </em>
                            <a target="_blank" href="http://www.jianshu.com/contact">联系我们</a>
                            <em> · </em>
                            <a target="_blank" href="http://www.jianshu.com/c/bfeec2e13990">加入我们</a>
                            <em> · </em>
                            <a target="_blank" href="http://www.jianshu.com/p/fc1c113e5b6b">简书出版</a>
                            <em> · </em>
                            <a target="_blank" href="http://www.jianshu.com/press">品牌与徽标</a>
                            <em> · </em>
                            <a target="_blank" href="http://www.jianshu.com/faqs">帮助中心</a>
                            <em> · </em>
                            <a target="_blank" href="http://www.jianshu.com/p/cabc8fa39830">合作伙伴</a>
                        </div>
                        <div className="icp">
                            ©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
                                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">
                                <img src="//cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png" alt="Smrz" />
                            </a>        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">沪公网安备31010402002252号 / </a>
                            <a target="_blank" href="http://www.shjbzx.cn/">
                                <img src="//cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png" alt="Wxb" />
                            </a>        简书网举报电话：021-34770013 /
                                <a target="_blank" href="javascript:void(null)">
                                <img src="//cdn2.jianshu.io/assets/web/fanzha-10518f0f6b33635180b190975ae68ca6.jpg" alt="Fanzha" />
                            </a>        亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听 /
                                <a target="_blank" href="http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020171107081457000002158769-SAIC_SHOW_310000-20171115131223587837&amp;signData=MEQCIADWZ5aTcBeER5SOVp0ly+ElvKnwtjczum6Gi6wZ7/wWAiB9MAPM22hp947ZaBobux5PDkd0lfqoCOkVV7zjCYME6g==" >
                                <img src="//cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png" alt="Zggsrz" />
                            </a>      </div>
                    </div>
                </footer>
            </div>
        );
    }
    getIndexdata() {
    
        axios.get('/api/home.json')
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        data: res.data.data,
                    })
                }

            })
    }
    componentDidMount() {
        this.getIndexdata();

    }
    pushList = () => {
        axios.get('/api/homeList.json')
            .then(res => {
                if (res.data.success) {
                    var data = this.state.data;
                    for (let i = 0; i < res.data.data.length; i++) {
                        data.articleList.push(
                            res.data.data[i]
                        )
                    }
                    this.setState({
                        data: data
                    })
                }

            })

    }


}

export default Index;