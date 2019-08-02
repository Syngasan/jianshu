
import React, { Component } from 'react';
var timer = null;
var isTop = true;
class Totop extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="toTop" data-original-title="回到顶部" onClick={this.topFunction} id="myBtn">
                <a className="toTopIcon" href="javascript: void ( 0 ); " >
                    <i className="iconfont icon-jiantoushang"></i>
                </a>
            </div>
        );
    }
    componentDidMount() {
        
        window.onscroll = () => {
            if (window.onscroll) {
                this.scrollFunction()
            }
        };
    }
    scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
        //回到顶部过程中用户滚动滚动条，停止定时器
        if (!isTop) {
            clearInterval(timer);
        };
        isTop = false;
    }
    // 点击按钮，返回顶部
    topFunction = () => {
        //设置定时器
        timer = setInterval(function () {
            //获取滚动条距离顶部高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed = Math.floor(-osTop / 7);

            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            //到达顶部，清除定时器
            if (osTop === 0) {
                clearInterval(timer);
            };
            isTop = true;

        }, 30);
    }
}

export default Totop;