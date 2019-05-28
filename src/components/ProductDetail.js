/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Product from './Product';

import '../css/main.css';
import '../css/util.css';
import '../vendor/bootstrap/css/bootstrap.min.css';

class ProductDetail extends React.Component {
	// state = {
	// 	product: {},
	// };

	// eslint-disable-next-line react/sort-comp
	// product: null;
	constructor(props) {
		super(props);
		this.state = {
			product: "",
		};
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		try {
			const result = await fetch(`http://localhost:8080/product-detail/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});
			const resultJSON = await result.json();
			console.log('resultJSON: ', resultJSON);
			this.setState({ product: resultJSON });
			// this.product = resultJSON;
		} catch (error) {
			console.log('error', error);
		}
	}
	// componentDidMount() {
	// 	this.getResults();
	// }

	// getResults = async () => {
	// 	const { id } = this.props.match.params;
	// 	try {
	// 		const result = await fetch(`http://localhost:8080/product-detail/${id}`, {
	// 			method: 'GET',
	// 			headers: {
	// 				'Content-Type': 'application/x-www-form-urlencoded',
	// 			},
	// 		});
	// 		const resultJSON = await result.json();
	// 		console.log('resultJSON: ', resultJSON);
	// 		this.setState(() => { product: resultJSON });
	// 		// this.product = resultJSON;
	// 	} catch (error) {
	// 		console.log('error', error);
	// 	}
	// };

	render() {
		// const { product } = this.state;
		// console.log('product: ', product);
		return (
			<>
				{/* <!-- Header --> */}
				<header className="header1">
					{/* <!-- Header desktop --> */}
					<div className="container-menu-header">
						<div className="topbar">
							<div className="topbar-social">
								<a href="#" className="topbar-social-item fa fa-facebook" />
								<a href="#" className="topbar-social-item fa fa-instagram" />
								<a href="#" className="topbar-social-item fa fa-pinterest-p" />
								<a href="#" className="topbar-social-item fa fa-snapchat-ghost" />
								<a href="#" className="topbar-social-item fa fa-youtube-play" />
							</div>

							<span className="topbar-child1">Free shipping for standard order over $100</span>

							<div className="topbar-child2">
								<span className="topbar-email">fashe@example.com</span>

								<div className="topbar-language rs1-select2">
									<select className="selection-1" name="time">
										<option>USD</option>
										<option>EUR</option>
									</select>
								</div>
							</div>
						</div>

						<div className="wrap_header">
							{/* <!-- Logo --> */}
							<a href="index.html" className="logo">
								<img src="images/icons/logo.png" alt="IMG-LOGO" />
							</a>

							{/* <!-- Menu --> */}
							<div className="wrap_menu">
								<nav className="menu">
									<ul className="main_menu">
										<li>
											<a href="index.html">Home</a>
											<ul className="sub_menu">
												<li>
													<a href="index.html">Homepage V1</a>
												</li>
												<li>
													<a href="home-02.html">Homepage V2</a>
												</li>
												<li>
													<a href="home-03.html">Homepage V3</a>
												</li>
											</ul>
										</li>

										<li>
											<a href="product.html">Shop</a>
										</li>

										<li className="sale-noti">
											<a href="product.html">Sale</a>
										</li>

										<li>
											<a href="cart.html">Features</a>
										</li>

										<li>
											<a href="blog.html">Blog</a>
										</li>

										<li>
											<a href="about.html">About</a>
										</li>

										<li>
											<a href="contact.html">Contact</a>
										</li>
									</ul>
								</nav>
							</div>

							{/* <!-- Header Icon --> */}
							<div className="header-icons">
								<a href="#" className="header-wrapicon1 dis-block">
									<img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
								</a>

								<span className="linedivide1" />

								<div className="header-wrapicon2">
									<img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
									<span className="header-icons-noti">0</span>

									{/* <!-- Header cart noti --> */}
									<div className="header-cart header-dropdown">
										<ul className="header-cart-wrapitem">
											<li className="header-cart-item">
												<div className="header-cart-item-img">
													<img src="images/item-cart-01.jpg" alt="IMG" />
												</div>

												<div className="header-cart-item-txt">
													<a href="#" className="header-cart-item-name">
														White Shirt With Pleat Detail Back
													</a>

													<span className="header-cart-item-info">1 x $19.00</span>
												</div>
											</li>

											<li className="header-cart-item">
												<div className="header-cart-item-img">
													<img src="images/item-cart-02.jpg" alt="IMG" />
												</div>

												<div className="header-cart-item-txt">
													<a href="#" className="header-cart-item-name">
														Converse All Star Hi Black Canvas
													</a>

													<span className="header-cart-item-info">1 x $39.00</span>
												</div>
											</li>

											<li className="header-cart-item">
												<div className="header-cart-item-img">
													<img src="images/item-cart-03.jpg" alt="IMG" />
												</div>

												<div className="header-cart-item-txt">
													<a href="#" className="header-cart-item-name">
														Nixon Porter Leather Watch In Tan
													</a>

													<span className="header-cart-item-info">1 x $17.00</span>
												</div>
											</li>
										</ul>

										<div className="header-cart-total">Total: $75.00</div>

										<div className="header-cart-buttons">
											<div className="header-cart-wrapbtn">
												{/* <!-- Button --> */}
												<a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
													View Cart
												</a>
											</div>

											<div className="header-cart-wrapbtn">
												{/* <!-- Button --> */}
												<a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
													Check Out
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Header Mobile --> */}
					<div className="wrap_header_mobile">
						{/* <!-- Logo moblie --> */}
						<a href="index.html" className="logo-mobile">
							<img src="images/icons/logo.png" alt="IMG-LOGO" />
						</a>

						{/* <!-- Button show menu --> */}
						<div className="btn-show-menu">
							{/* <!-- Header Icon mobile --> */}
							<div className="header-icons-mobile">
								<a href="#" className="header-wrapicon1 dis-block">
									<img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
								</a>

								<span className="linedivide2" />

								<div className="header-wrapicon2">
									<img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
									<span className="header-icons-noti">0</span>

									{/* <!-- Header cart noti --> */}
									<div className="header-cart header-dropdown">
										<ul className="header-cart-wrapitem">
											<li className="header-cart-item">
												<div className="header-cart-item-img">
													<img src="images/item-cart-01.jpg" alt="IMG" />
												</div>

												<div className="header-cart-item-txt">
													<a href="#" className="header-cart-item-name">
														White Shirt With Pleat Detail Back
													</a>

													<span className="header-cart-item-info">1 x $19.00</span>
												</div>
											</li>

											<li className="header-cart-item">
												<div className="header-cart-item-img">
													<img src="images/item-cart-02.jpg" alt="IMG" />
												</div>

												<div className="header-cart-item-txt">
													<a href="#" className="header-cart-item-name">
														Converse All Star Hi Black Canvas
													</a>

													<span className="header-cart-item-info">1 x $39.00</span>
												</div>
											</li>

											<li className="header-cart-item">
												<div className="header-cart-item-img">
													<img src="images/item-cart-03.jpg" alt="IMG" />
												</div>

												<div className="header-cart-item-txt">
													<a href="#" className="header-cart-item-name">
														Nixon Porter Leather Watch In Tan
													</a>

													<span className="header-cart-item-info">1 x $17.00</span>
												</div>
											</li>
										</ul>

										<div className="header-cart-total">Total: $75.00</div>

										<div className="header-cart-buttons">
											<div className="header-cart-wrapbtn">
												{/* <!-- Button --> */}
												<a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
													View Cart
												</a>
											</div>

											<div className="header-cart-wrapbtn">
												{/* <!-- Button --> */}
												<a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
													Check Out
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="btn-show-menu-mobile hamburger hamburger--squeeze">
								<span className="hamburger-box">
									<span className="hamburger-inner" />
								</span>
							</div>
						</div>
					</div>

					{/* <!-- Menu Mobile --> */}
					<div className="wrap-side-menu">
						<nav className="side-menu">
							<ul className="main-menu">
								<li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
									<span className="topbar-child1">Free shipping for standard order over $100</span>
								</li>
								<li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
									<div className="topbar-child2-mobile">
										<span className="topbar-email">fashe@example.com</span>

										<div className="topbar-language rs1-select2">
											<select className="selection-1" name="time">
												<option>USD</option>
												<option>EUR</option>
											</select>
										</div>
									</div>
								</li>
								<li className="item-topbar-mobile p-l-10">
									<div className="topbar-social-mobile">
										<a href="#" className="topbar-social-item fa fa-facebook" />
										<a href="#" className="topbar-social-item fa fa-instagram" />
										<a href="#" className="topbar-social-item fa fa-pinterest-p" />
										<a href="#" className="topbar-social-item fa fa-snapchat-ghost" />
										<a href="#" className="topbar-social-item fa fa-youtube-play" />
									</div>
								</li>
								<li className="item-menu-mobile">
									<a href="index.html">Home</a>
									<ul className="sub-menu">
										<li>
											<a href="index.html">Homepage V1</a>
										</li>
										<li>
											<a href="home-02.html">Homepage V2</a>
										</li>
										<li>
											<a href="home-03.html">Homepage V3</a>
										</li>
									</ul>
									<i className="arrow-main-menu fa fa-angle-right" aria-hidden="true" />
								</li>
								<li className="item-menu-mobile">
									<a href="product.html">Shop</a>
								</li>
								Name
								<li className="item-menu-mobile">
									<a href="product.html">Sale</a>
								</li>
								<li className="item-menu-mobile">
									<a href="cart.html">Features</a>
								</li>
								<li className="item-menu-mobile">
									<a href="blog.html">Blog</a>
								</li>
								<li className="item-menu-mobile">
									<a href="about.html">About</a>
								</li>
								<li className="item-menu-mobile">
									<a href="contact.html">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
				</header>

				{/* <!-- breadcrumb --> */}
				<div className="bread-crumb bgwhite flex-w p-l-52 p-r-15 p-t-30 p-l-15-sm">
					<a href="index.html" className="s-text16">
						Home
						<i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true" />
					</a>

					<a href="product.html" className="s-text16">
						Women
						<i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true" />
					</a>

					<a href="#" className="s-text16">
						T-Shirt
						<i className="fa fa-angle-right m-l-8 m-r-9" aria-hidden="true" />
					</a>

					<span className="s-text17">{this.state.product && this.state.product[0].name}</span>
				</div>

				{/* <!-- Product Detail --> */}
				{this.state.product && <Product product={this.state.product[0]} />}

				{/* <!-- Relate Product --> */}
				<section className="relateproduct bgwhite p-t-45 p-b-138">
					<div className="container">
						<div className="sec-title p-b-60">
							<h3 className="m-text5 t-center">Related Products</h3>
						</div>

						{/* <!-- Slide2 --> */}
						<div className="wrap-slick2">
							<div className="slick2">
								<div className="item-slick2 p-l-15 p-r-15">
									{/* <!-- Block2 --> */}
									<div className="block2">
										<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
											<img src="images/item-02.jpg" alt="IMG-PRODUCT" />

											<div className="block2-overlay trans-0-4">
												<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
													<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
													<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
												</a>

												<div className="block2-btn-addcart w-size1 trans-0-4">
													{/* <!-- Button --> */}
													<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">Add to Cart</button>
												</div>
											</div>
										</div>

										<div className="block2-txt p-t-20">
											<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
												Herschel supply co 25l
											</a>

											<span className="block2-price m-text6 p-r-5">$75.00</span>
										</div>
									</div>
								</div>

								<div className="item-slick2 p-l-15 p-r-15">
									{/* <!-- Block2 --> */}
									<div className="block2">
										<div className="block2-img wrap-pic-w of-hidden pos-relative">
											<img src="images/item-03.jpg" alt="IMG-PRODUCT" />

											<div className="block2-overlay trans-0-4">
												<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
													<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
													<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
												</a>

												<div className="block2-btn-addcart w-size1 trans-0-4">
													{/* <!-- Button --> */}
													<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">Add to Cart</button>
												</div>
											</div>
										</div>

										<div className="block2-txt p-t-20">
											<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
												Denim jacket blue
											</a>

											<span className="block2-price m-text6 p-r-5">$92.50</span>
										</div>
									</div>
								</div>

								<div className="item-slick2 p-l-15 p-r-15">
									{/* <!-- Block2 --> */}
									<div className="block2">
										<div className="block2-img wrap-pic-w of-hidden pos-relative">
											<img src="images/item-05.jpg" alt="IMG-PRODUCT" />

											<div className="block2-overlay trans-0-4">
												<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
													<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
													<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
												</a>

												<div className="block2-btn-addcart w-size1 trans-0-4">
													{/* <!-- Button --> */}
													<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">Add to Cart</button>
												</div>
											</div>
										</div>

										<div className="block2-txt p-t-20">
											<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
												Coach slim easton black
											</a>

											<span className="block2-price m-text6 p-r-5">$165.90</span>
										</div>
									</div>
								</div>

								<div className="item-slick2 p-l-15 p-r-15">
									{/* <!-- Block2 --> */}
									<div className="block2">
										<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
											<img src="images/item-07.jpg" alt="IMG-PRODUCT" />

											<div className="block2-overlay trans-0-4">
												<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
													<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
													<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
												</a>

												<div className="block2-btn-addcart w-size1 trans-0-4">
													{/* <!-- Button --> */}
													<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">Add to Cart</button>
												</div>
											</div>
										</div>

										<div className="block2-txt p-t-20">
											<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
												Frayed denim shorts
											</a>

											<span className="block2-oldprice m-text7 p-r-5">$29.50</span>

											<span className="block2-newprice m-text8 p-r-5">$15.90</span>
										</div>
									</div>
								</div>

								<div className="item-slick2 p-l-15 p-r-15">
									{/* <!-- Block2 --> */}
									<div className="block2">
										<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
											<img src="images/item-02.jpg" alt="IMG-PRODUCT" />

											<div className="block2-overlay trans-0-4">
												<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
													<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
													<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
												</a>

												<div className="block2-btn-addcart w-size1 trans-0-4">
													{/* <!-- Button --> */}
													<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">Add to Cart</button>
												</div>
											</div>
										</div>

										<div className="block2-txt p-t-20">
											<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
												Herschel supply co 25l
											</a>

											<span className="block2-price m-text6 p-r-5">$75.00</span>
										</div>
									</div>
								</div>

								<div className="item-slick2 p-l-15 p-r-15">
									{/* <!-- Block2 --> */}
									<div className="block2">
										<div className="block2-img wrap-pic-w of-hidden pos-relative">
											<img src="images/item-03.jpg" alt="IMG-PRODUCT" />

											<div className="block2-overlay trans-0-4">
												<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
													<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
													<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
												</a>

												<div className="block2-btn-addcart w-size1 trans-0-4">
													{/* <!-- Button --> */}
													<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">Add to Cart</button>
												</div>
											</div>
										</div>

										<div className="block2-txt p-t-20">
											<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
												Denim jacket blue
											</a>

											<span className="block2-price m-text6 p-r-5">$92.50</span>
										</div>
									</div>
								</div>

								<div className="item-slick2 p-l-15 p-r-15">
									{/* <!-- Block2 --> */}
									<div className="block2">
										<div className="block2-img wrap-pic-w of-hidden pos-relative">
											<img src="images/item-05.jpg" alt="IMG-PRODUCT" />

											<div className="block2-overlay trans-0-4">
												<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
													<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
													<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
												</a>

												<div className="block2-btn-addcart w-size1 trans-0-4">
													{/* <!-- Button --> */}
													<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">Add to Cart</button>
												</div>
											</div>
										</div>

										<div className="block2-txt p-t-20">
											<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
												Coach slim easton black
											</a>

											<span className="block2-price m-text6 p-r-5">$165.90</span>
										</div>
									</div>
								</div>

								<div className="item-slick2 p-l-15 p-r-15">
									{/* <!-- Block2 --> */}
									<div className="block2">
										<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
											<img src="images/item-07.jpg" alt="IMG-PRODUCT" />

											<div className="block2-overlay trans-0-4">
												<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
													<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
													<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
												</a>

												<div className="block2-btn-addcart w-size1 trans-0-4">
													{/* <!-- Button --> */}
													<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">Add to Cart</button>
												</div>
											</div>
										</div>

										<div className="block2-txt p-t-20">
											<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
												Frayed denim shorts
											</a>

											<span className="block2-oldprice m-text7 p-r-5">$29.50</span>

											<span className="block2-newprice m-text8 p-r-5">$15.90</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- Footer --> */}
				<footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
					<div className="flex-w p-b-90">
						<div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
							<h4 className="s-text12 p-b-30">GET IN TOUCH</h4>

							<div>
								<p className="s-text7 w-size27">
									Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
								</p>

								<div className="flex-m p-t-30">
									<a href="#" className="fs-18 color1 p-r-20 fa fa-facebook" />
									<a href="#" className="fs-18 color1 p-r-20 fa fa-instagram" />
									<a href="#" className="fs-18 color1 p-r-20 fa fa-pinterest-p" />
									<a href="#" className="fs-18 color1 p-r-20 fa fa-snapchat-ghost" />
									<a href="#" className="fs-18 color1 p-r-20 fa fa-youtube-play" />
								</div>
							</div>
						</div>

						<div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
							<h4 className="s-text12 p-b-30">Categories</h4>

							<ul>
								<li className="p-b-9">
									<a href="#" className="s-text7">
										Men
									</a>
								</li>

								<li className="p-b-9">
									<a href="#" className="s-text7">
										Women
									</a>
								</li>

								<li className="p-b-9">
									<a href="#" className="s-text7">
										Dresses
									</a>
								</li>

								<li className="p-b-9">
									<a href="#" className="s-text7">
										Sunglasses
									</a>
								</li>
							</ul>
						</div>

						<div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
							<h4 className="s-text12 p-b-30">Links</h4>

							<ul>
								<li className="p-b-9">
									<a href="#" className="s-text7">
										Search
									</a>
								</li>

								<li className="p-b-9">
									<a href="#" className="s-text7">
										About Us
									</a>
								</li>

								<li className="p-b-9">
									<a href="#" className="s-text7">
										Contact Us
									</a>
								</li>

								<li className="p-b-9">
									<a href="#" className="s-text7">
										Returns
									</a>
								</li>
							</ul>
						</div>

						<div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
							<h4 className="s-text12 p-b-30">Help</h4>

							<ul>
								<li className="p-b-9">
									<a href="#" className="s-text7">
										Track Order
									</a>
								</li>

								<li className="p-b-9">
									<a href="#" className="s-text7">
										Returns
									</a>
								</li>

								<li className="p-b-9">
									<a href="#" className="s-text7">
										Shipping
									</a>
								</li>

								<li className="p-b-9">
									<a href="#" className="s-text7">
										FAQs
									</a>
								</li>
							</ul>
						</div>

						<div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
							<h4 className="s-text12 p-b-30">Newsletter</h4>

							<form>
								<div className="effect1 w-size9">
									<input className="s-text7 bg6 w-full p-b-5" type="text" name="email" placeholder="email@example.com" />
									<span className="effect1-line" />
								</div>

								<div className="w-size2 p-t-20">
									{/* <!-- Button --> */}
									<button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">Subscribe</button>
								</div>
							</form>
						</div>
					</div>

					<div className="t-center p-l-15 p-r-15">
						<a href="#">
							<img className="h-size2" src="images/icons/paypal.png" alt="IMG-PAYPAL" />
						</a>

						<a href="#">
							<img className="h-size2" src="images/icons/visa.png" alt="IMG-VISA" />
						</a>

						<a href="#">
							<img className="h-size2" src="images/icons/mastercard.png" alt="IMG-MASTERCARD" />
						</a>

						<a href="#">
							<img className="h-size2" src="images/icons/express.png" alt="IMG-EXPRESS" />
						</a>

						<a href="#">
							<img className="h-size2" src="images/icons/discover.png" alt="IMG-DISCOVER" />
						</a>

						<div className="t-center s-text8 p-t-20">
							Copyright © 2018 All rights reserved. | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by{' '}
							<a href="https://colorlib.com" target="_blank">
								Colorlib
							</a>
						</div>
					</div>
				</footer>

				{/* <!-- Back to top --> */}
				<div className="btn-back-to-top bg0-hov" id="myBtn">
					<span className="symbol-btn-back-to-top">
						<i className="fa fa-angle-double-up" aria-hidden="true" />
					</span>
				</div>

				{/* <!-- Container Selection --> */}
				<div id="dropDownSelect1" />
				<div id="dropDownSelect2" />
			</>
		);
	}
}

export default ProductDetail;
