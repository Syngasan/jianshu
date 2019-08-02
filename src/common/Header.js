import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../css/header.css'

import axios from 'axios';
class Header extends Component {
	constructor(props) {
        super(props);
        this.state = { 
			data:'',
			showTrue:false,
			headerList:[],
			isdeg:0,
			arrHtml:[]
		 }
    }
	render() {
		
		return (
			<nav className="jianshu-nav">
				<div className="width-limit clearFix">
					<NavLink className="logo" to="/"><img src="//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt="Nav logo" /></NavLink>
					<NavLink to='/' className="btn write-btn" target="_blank" href="/writer#/">
						<i className="iconfont icon-combinedshapecopy2"></i>写文章
					</NavLink>
					<NavLink to='/register' className="btn sign-up" id="sign_up" href="/sign_up">注册</NavLink>
					<NavLink to='/login' className="btn log-in" id="sign_in" href="/sign_in">登录</NavLink>
					<div className="nav-test"><a ><img src="//cdn2.jianshu.io/assets/web/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png" /></a></div>
					<div className="style-mode">
						<a className="style-mode-btn"><i className="iconfont icon-zitifont5"></i></a>
					</div>
					<div className="jianshu-nav-m">
						<ul className="clearFix">
							<li className="tab active">
								<a href="/">
									<span className="menu-text">首页</span><i className="iconfont icon-faxianzhinanzhen
 menu-icon"></i>
								</a>
							</li>
							<li className="tab ">
								<a id="web-nav-app-download-btn" className="app-download-btn" href="/apps?utm_medium=desktop&amp;utm_source=navbar-apps"><span className="menu-text">下载App</span><i className="iconfont icon-shoujixiazai menu-icon"></i></a>
							</li>
							<li className="search">
								<form>
									<input type="text" className="search-input" placeholder="搜索"></input>
									<a className="search-btn" href="javascript:void(null)"><i className="iconfont icon-fangdajing"></i></a>
									<div id="navbar-search-tips" onMouseEnter={this.showDiv} onMouseLeave={this.showDiv1} className={this.state.showTrue==true?'show-navbar-search-tips':''}>
										
											<div className="search-trending-header clearfix">
												<span className="search-trending-l">热门搜索</span>
												<span className="search-trending-r" onClick={this.btnChange}><i style={{'transform':`rotate(${this.state.isdeg}deg)`}} ref="rotate" className="iconfont icon-shuaxin" ></i>换一批</span>
											</div>
											<ul className="search-trending-tag-wrap clearFix">
												{
													(	function(_this)	{
															if(_this.state.arrHtml){
																var arr = []
																_this.state.arrHtml.map((item,index)=> {
																	arr.push(
																		<li key={index}><a href="#" target="_blank">{item}</a></li>
																	)
																})
																return arr;
															}
													})(this)
												}
											</ul>
											
										
									</div>
								</form>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
	getHeaderList = ()=>{
		axios.get('/api/headerList.json')
		.then(res=>{
			if(res.data.success){
				var arr=[]
				
				for (let i = 0; i < res.data.data.length; i++) {
					arr.push(res.data.data[i]);
				
				}
			
				this.setState({
					headerList:arr,
					data:res.data.data,
					
					
				})
				this.btnChange();
			}
		})
		.catch(err=>{

		})
	}
	
	btnChange=()=>{

		var num = parseInt(Math.random()*(12 - 6) + 6);
	
		var arr = JSON.parse(JSON.stringify(this.state.headerList));
		var arrHtml = [];
		
		for(var i=0;i<num;i++){
			
			var index = parseInt(Math.random()*arr.length);
			var item = arr[index];
			arrHtml.push(item);
			
			arr.splice(index,1);
		}
		
		this.setState({
			isdeg:this.state.isdeg+=360,
			arrHtml:arrHtml
		})
		
	
		
	}
	showDiv=()=>{
		this.setState({
			showTrue:true
		})
	}
	showDiv1=()=>{
		this.setState({
			showTrue:false
		})
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		this.getHeaderList();				
	}
}

export default Header;
