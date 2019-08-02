import React, { Component } from 'react';
import Header from '../common/Header'
import Totop from '../common/Totop'
import '../css/details.css'
import axios from 'axios'
class Details extends Component {
	state = {
		detailData: ''
	}
	render() {
		document.title = this.state.detailData.title
		return (
			<div>
				<Header />
				<div className="note">
					<div id="note-fixed-ad" className="note-fixed-ad">
						<div className="note-fixed-ad-t">
							<a>
								<span className="close">×</span>
							</a>
						</div>
						<div className="note-fixed-ad-b">
							<a>
								<img src="https://oimageb1.ydstatic.com/image?id=8674494668937785218&product=adpublish&w=360&h=360&sc=0&rm=2&gsb=0&gsbd=60"></img>
							</a>
							<span className="ad-badge">广告</span>
						</div>
					</div>
					<div className="post">
						<div className="article">
							<h1 className="title">{this.state.detailData.title}</h1>
							<div className="author">
								<a className="avatar">
									<img src="//upload.jianshu.io/users/upload_avatars/15874140/9871af77-bd7b-45fb-98d5-627d1f901e4d?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" />
								</a>
								<div className="info">
									<span className="name"><a href="/u/065de3a8465b">云卷云舒_7a20</a></span>
									<img className="badge-icon" data-toggle="tooltip" title="" src="//upload.jianshu.io/user_badge/5203a3bf-1c0f-41db-a6f0-31ddb4a929cb" alt="5203a3bf 1c0f 41db a6f0 31ddb4a929cb" data-original-title="锦鲤"></img>
									<a className="follow"><i className="iconfont icon-jiahao2"></i><span>关注</span></a>
									<div className="meta">
										<span className="jsd-meta">
											<i className="iconfont icon-lv_zuanshi_fill"></i> 15.8
										</span>
										<span className="publish-time" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="最后编辑于 2019.04.14 11:51">2019.04.13 20:17*</span>
										<span className="wordage">字数 853</span>
										<span className="views-count">阅读 3637</span><span className="comments-count">评论 6</span><span className="likes-count">喜欢 84</span>
									</div>
								</div>
							</div>
							<div className="show-content">
								<div className="show-content-free">
									{/* <p>1.</p>
									<p>&nbsp; &nbsp; &nbsp; &nbsp; 在一个很热的夏天，有一对情侣去公园散步，男的叫小明，女的叫小芳。<br /></p>
									<p>&nbsp; &nbsp; &nbsp;  在公园转了一大圈有点累了，就坐在一张长椅下。小明看看四周没有人，就小声地对小芳说，我可以亲你吗？<br /></p>
									<h4>&nbsp; &nbsp; &nbsp; 这个故事，告诉我们想到就去做，绝对没有错。</h4>
									<div className="image-package">
										<div className="image-container">
											<img src="https://upload-images.jianshu.io/upload_images/15874140-1d7fb79709d5e0dc.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/440/format/webp" />
											<div className="image-caption">图片发自简书App</div>
										</div>
									</div>
									<p>2.</p>
									<p>&nbsp; &nbsp; &nbsp;  从前，有一个神父，生前非常崇拜他的上帝。<br /></p>
									<p>&nbsp; &nbsp; &nbsp;  一天，上帝托梦给他，说他们村庄将遭遇一场洪水，叫他把村庄里的人都清散走。于是，在第二天，他就说服村里的人都搬走。<br /></p> */}
									{function (_this) {
										if (_this.state.detailData) {
											return (
												<div dangerouslySetInnerHTML={{ __html: _this.state.detailData.content }}>

												</div>
											)
										}
									}(this)}
								</div>
							</div>
						</div>
						<div id="free-reward-panel" className="support-author">
							<p>小礼物走一走，来简书关注我</p>
							<div className="btn btn-pay">赞赏支持</div>
							<div className="supporter">
								<ul className="support-list"></ul>
							</div>
						</div>
						<div className="show-foot">
							<a className="notebook" href="/nb/33295899">
								<i className="iconfont ic-search-notebook"></i>
								<span>日记本</span>
							</a>
							<div className="copyright" data-toggle="tooltip" data-html="true" data-original-title="转载请联系作者获得授权，并标注“简书作者”。">
								© 著作权归作者所有
        					</div>
							<div className="modal-wrap" data-report-note="">
								<a id="report-modal">举报文章</a>
							</div>
						</div>
						<div className="follow-detail">
							<div className="info">
								<a className="avatar" href="/u/065de3a8465b">
									<img src="//upload.jianshu.io/users/upload_avatars/15874140/9871af77-bd7b-45fb-98d5-627d1f901e4d?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="96" />
								</a>
								<a className="title" href="/u/065de3a8465b">云卷云舒_7a20</a>
								<a className="follow">
									<i className="iconfont icon-jiahao2"></i>
									<span>关注</span>
								</a>
								<img className="badge-icon" data-toggle="tooltip" title="" src="//upload.jianshu.io/user_badge/5203a3bf-1c0f-41db-a6f0-31ddb4a929cb" alt="5203a3bf 1c0f 41db a6f0 31ddb4a929cb" data-original-title="锦鲤" ></img>
								<p>写了 118565 字，被 343 人关注，获得了 3568 个喜欢</p>
							</div>
						</div>
						<div className="meta-bottom">
							<div className="like">
								<div className="like-group">
									<span>喜欢</span>
									<span>84</span>
									<i className="iconfont icon-02"></i>
								</div>
							</div>
							<div className="share-group">
								<a className="share-circle">
									<i className="iconfont icon-weixin"></i>

								</a>
								<a className="share-circle">
									<i className="iconfont icon-weibo"></i>

								</a>
								<a className="share-circle">
									<i className="iconfont icon-tupian	"></i>
								</a>
								<a className="more-share">更多分享</a>
							</div>
						</div>
						<div id="note-ad" >
							<a id="web-note-ad-1" target="_blank" href="/apps/redirect?utm_source=note-bottom-click">
								<img src="//cdn2.jianshu.io/assets/web/web-note-ad-1-c2e1746859dbf03abe49248893c9bea4.png" alt="Web note ad 1" />
							</a>
						</div>
						<div className="comment-list">
							<form className="new-comment">
								<a className="avatar">
									<img src="//cdn2.jianshu.io/assets/default_avatar/avatar_default-78d4d1f68984cd6d4379508dd94b4210.png" />
								</a>
								<div className="sign-container">
									<a href="/sign_in?utm_source=desktop&amp;utm_medium=not-signed-in-comment-form" className="btn-sign">登录</a>
									<span>后发表评论</span>
								</div>
							</form>
							<div className="normal-comment-list">
								<div className="top-title">
									<span>14条评论</span>
									<a className="author-only">只看作者</a>
									<a className="close-btn" style={{ display: "none" }}>关闭评论</a>
									<div className="pull-right">
										<a className="active">按时间倒序</a>
										<a className="">按时间正序</a>
									</div>
								</div>
								<div className="comment">
									<div className="author">
										<div className="v-tooltip-container">
											<div className="v-tooltip-content">
												<a href="/u/a17a3848dd3f" target="_blank" className="avatar">
													<img src="//upload.jianshu.io/users/upload_avatars/15671103/1da4d3d5-a1b0-4eed-94ae-3cb0074208b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114/format/webp" />
												</a>
											</div>
										</div>
										<div className="info">
											<a href="/u/a17a3848dd3f" target="_blank" className="name">美工设计</a>
											<div className="meta">
												<span>13楼 · 2019.03.16 17:02</span>
											</div>
										</div>
									</div>
									<div className="comment-wrap">
										<p>赞👍</p>
										<div className="tool-group">
											<a className="like-button">
												<i className="iconfont icon-zan"></i>
												<span>赞</span>
											</a>
											<a >
												<i className="iconfont icon-duihuakuang1"></i>
												<span>回复</span>
											</a>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div className="note-bottom">
					<div className="main">
						<div className="find-more">
							<p className="title">被以下专题收入，发现更多相似内容</p>
							<div className="include-collection">
								<a href="/c/RfYyQj?utm_source=desktop&amp;utm_medium=notes-included-collection" target="_blank" className="item">
									<img src="//upload.jianshu.io/collections/images/12/1239240801.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp" />
									<div className="name">散文</div>
								</a>

							</div>
						</div>
						<div className="recommend-note">
							<div className="re-title">
								推荐阅读
								<a className="more">更多精彩内容&nbsp;&nbsp;&gt;</a>
							</div>
							<div className="footer-ad">
								<p className="ad-title">商业数据分析，3个月轻松入门</p>
								<p className="ad-des">立即报名，立减千元学费</p>
								<div className="ad-badge">广告</div>
								<img src="https://oimageb5.ydstatic.com/image?id=5497174090376528370&product=adpublish&w=320&h=240&sc=0&rm=0" />
								<a className="jump" href="https://log-yex.youdao.com/ct?slot=f2ac00aef0eb6b673f4e4639046bc6f8&youdao_bid=ff473fc4-cda9-412d-b857-f9a5a893dc5d&yexi=c276a0217c9078b53e37d43bf59ed211&yexcb=1y4FJqDtu7TbWL8pBigUkcyefD8OOgfBOGVz5uGGxDd3ibNDe3FtXphewZi6NXllUWBnA7RxIOUAyVfwlEP9BpJkty4IQZSfEcTRVeu1ZxBe4QvmXCkcnrPvdaU4QpINGNYXLLM9ThYrJ2lYVPctdItpyjAfn1hcIbvCZJ8b9wRjDHEDgffkchcj_-xE4l9kav87ruINnxEZK9CrxU2QJdNi1CydvKR3Nc6TTQ-85U8&yexr=https%3A%2F%2Fdsp-click.youdao.com%2Fclk%2Frequest.s%3Fk%3DR%252FuYQLBqVMzK8%252BLb6wr%252FprmeYLNrzueSnXEsAk8yi9PXxo%252BoRxcJpjjAgKuViCqvIxCHqA9N%252F2c%252F9Be%252FcwcSr7phIUjyvFLlBTLfrEWptkNtwHqajpGq6J1Fgr7dO02FQaAO117u4w%252FYxgJ2whR6BJaDFR7TuqB%252B1thpMk3Nzvhv0yDKGUJ9hEviGVibSX2H1zb%252BFcjOayq354KYubnerony2%252FaFb1ZHMRvsAL7YVCMT%252B0AHI5OfkTG%252BLPyNT8l47TiAphTJmRroxP68PNoQc8Bc8hTRkDkpUdNHMN2yVKT%252BEc%252Bd1jbbq9hGJq0XLIGZMHMNk0HBE7d6E4vICqnJAl16Cg%252BsHjwne1fg0d0rY8EfHzzoubiJ5VbJLrY7u2riH%252B9RoVN3FlELmEk01S%252F3InJ3h8CYEmN2ZmFngWSIMSwl2iS7FOgHCcgn0g%252BSef%252FwWX%252FOZLhfgwuUrGdUkJkhdRXf4MMZBk9Mo3LZpaNedKtZ1j6Nabmh6vze4qJyAbSaRaymItmw2NsfzTq4uA63cPVhHKZq8tLI29zYBb8x5DqY%252FZI7%252FvzOPORBEpWy17beqPh1t%252Bqn6ofhFCkkNmkLZTzfaxee%252BsuXZOhu7x1qhPMqgL4OGVCee%252Btt92jY2IWUUfJeB8ruUms9Jq5uCcMAkUYxs6oidDsG63cFxldc0FQ%252FrEQCa4MaFQ9jIg%252FlgA42RYyj4cIAOMKflGPrqcDO0hlK%252FjeomOyfLGeWjxhkqkxfzMODQ2N5Q4zyVIZxa2ffiHYKCp8d1BPOXMJlNdPsx9HyxBmPFV7mEQ2PIxsdSr2TtLvdhSaEA6mkZtzcF3DBJ6%252BBlM4rc5NLRqrWh3uwVq8tb4NRuagdarV8G0JjOVWSWjeINwCpFufLEKCpzbJbeAofksmWWFjgwRULvGHoFgKDf%252BB7GXI0KWZ%252BM5x86UqtmuKeLnQow%252BoJt8WRvfch2o5RukjlgMGXXELyjF2h%252By9O8r1CZkzVj%252Bi99RXMpnXcSfjBLaxXDmLeJHQR1K9l18aPqEcXCaY4wICrlYgqr9fGj6hHFwmmOMCAq5WIKq82VqOfFU4jPPyrRqUWz5idoSrehncM4tAcO%252BGHWH89iw%253D%253D%26isrd%3D1%26youdao_bid%3Dff473fc4-cda9-412d-b857-f9a5a893dc5d&iid=%7B%225497174090376528370%22%3A1%7D&sid=17836"></a>
							</div>
							<div className="seo-recommended-notes">
								<div className="note have-img">
									<a className="img">
										<img src="https://upload-images.jianshu.io/upload_images/6636248-659ac33c6b5f7466.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" />
									</a>
									<a className="title">录趣|全国各大院校寝室状况都在这里了！</a>
									<p className="description">分数出来后，准大学生们多多少少都有了自己心仪的大学。你心仪的大学除了专业和城市外，生活环境怎么样？小鹿汇集了全国各大院校的住宿情况给大家，各位准大学生了解寝室环境后就可以开始憧憬未来4年的大学生活了。 文章底部含《大学寝室宫心计》，请各位准大学生认真研读~ 厦门大学翔安校区...</p>
									<a className="avatar">
										<img src="//upload.jianshu.io/users/upload_avatars/6636248/60c73744-340c-4912-afcd-2dd9f9adb0ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48" alt="48" />
										<span>录趣</span>
									</a>

								</div>
							</div>
						</div>
					</div>
				</div>
				<Totop />
			</div>
		)
	}
	getDetailsData = () => {
		axios.get('/api/detail.json')
			.then(res => {
				if (res.data.success) {
					this.setState({
						detailData: res.data.data
					})
					
				}

			})
	}

	componentDidMount() {
		this.getDetailsData()
		
	}
}

export default Details;
