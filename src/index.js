/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDOM from 'react-dom';

import './css/main.css';
import './css/util.css';
import './vendor/bootstrap/css/bootstrap.min.css';
// import './images/icons/icon-header-01.png';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/themify/themify-icons.css';
import './fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import './fonts/elegant-font/html-css/style.css';
import './vendor/animate/animate.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/animsition/css/animsition.min.css';
import './vendor/select2/select2.min.css';
import './vendor/slick/slick.css';
import './vendor/noui/nouislider.min.css';

import logo from './images/icons/logo.png';

class App extends React.Component {
	state = {
		productsAll: [],
		productsFiltered: [],
		productsDisplayed: [],
	};

	componentDidMount() {
		this.getResults();
	}

	getResults = async () => {
		try {
			const result = await fetch('http://localhost:8080/product', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});
			const resultJSON = await result.json();

			this.setState({ productsAll: resultJSON, productsDisplayed: resultJSON });
		} catch (error) {
			console.log('error', error);
		}
	};

	handlePriceSorting = e => {
		const { productsAll } = this.state;
		if (e.target.value === 'Price') {
			this.setState({ productsDisplayed: productsAll });
		} else {
			const priceRange = e.target.value.split('-');

			const productsFiltered = productsAll.filter(
				product => parseFloat(product.price) >= priceRange[0] && parseFloat(product.price) <= priceRange[1],
			);

			this.setState({ productsDisplayed: productsFiltered });
		}
	};

	handleDefaultSorting = e => {
		const sortOrder = e.target.value;
		const { productsAll } = this.state;
		if (sortOrder === 'lth') {
			const productsSorted = Object.assign([], productsAll).sort((a, b) => a.price - b.price);
			this.setState({ productsDisplayed: productsSorted });
		} else if (sortOrder === 'htl') {
			const productsSorted = Object.assign([], productsAll).sort((a, b) => b.price - a.price);
			this.setState({ productsDisplayed: productsSorted });
		} else {
			this.setState({ productsDisplayed: productsAll });
		}
	};

	render() {
		const { productsAll, productsDisplayed } = this.state;
		return (
			<>
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
								<img src="./images/icons/logo.png" alt="IMG-LOGO" />
								{/* <img src={logo} alt="IMG-LOGO" /> */}
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
									<img src="./images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
								</a>

								<span className="linedivide1" />

								<div className="header-wrapicon2">
									<img src="./images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
									<span className="header-icons-noti">0</span>

									{/* <!-- Header cart noti --> */}
									<div className="header-cart header-dropdown">
										<ul className="header-cart-wrapitem">
											<li className="header-cart-item">
												<div className="header-cart-item-img">
													<img src="./images/item-cart-01.jpg" alt="IMG" />
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
													<img src="./images/item-cart-02.jpg" alt="IMG" />
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
													<img src="./images/item-cart-03.jpg" alt="IMG" />
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
							<img src="./images/icons/logo.png" alt="IMG-LOGO" />
						</a>

						{/* <!-- Button show menu --> */}
						<div className="btn-show-menu">
							{/* <!-- Header Icon mobile --> */}
							<div className="header-icons-mobile">
								<a href="#" className="header-wrapicon1 dis-block">
									<img src="./images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
								</a>

								<span className="linedivide2" />

								<div className="header-wrapicon2">
									<img src="./images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
									<span className="header-icons-noti">0</span>

									{/* <!-- Header cart noti --> */}
									<div className="header-cart header-dropdown">
										<ul className="header-cart-wrapitem">
											<li className="header-cart-item">
												<div className="header-cart-item-img">
													<img src="./images/item-cart-01.jpg" alt="IMG" />
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
													<img src="./images/item-cart-02.jpg" alt="IMG" />
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
													<img src="./images/item-cart-03.jpg" alt="IMG" />
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

				{/* <!-- Title Page --> */}
				<section className="bg-title-page p-t-50 p-b-40 flex-col-c-m" style={{ backgroundImage: `url(images/heading-pages-02.jpg)` }}>
					<h2 className="l-text2 t-center">Women</h2>
					<p className="m-text13 t-center">New Arrivals Women Collection 2018</p>
				</section>

				{/* <!-- Content page --> */}
				<section className="bgwhite p-t-55 p-b-65">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
								<div className="leftbar p-r-20 p-r-0-sm">
									{/* <!--  --> */}
									<h4 className="m-text14 p-b-7">Categories</h4>

									<ul className="p-b-54">
										<li className="p-t-4">
											<a href="#" className="s-text13 active1">
												All
											</a>
										</li>

										<li className="p-t-4">
											<a href="#" className="s-text13">
												Women
											</a>
										</li>

										<li className="p-t-4">
											<a href="#" className="s-text13">
												Men
											</a>
										</li>

										<li className="p-t-4">
											<a href="#" className="s-text13">
												Kids
											</a>
										</li>

										<li className="p-t-4">
											<a href="#" className="s-text13">
												Accessories
											</a>
										</li>
									</ul>

									{/* <!--  --> */}
									<h4 className="m-text14 p-b-32">Filters</h4>

									<div className="filter-price p-t-22 p-b-50 bo3">
										<div className="m-text15 p-b-17">Price</div>

										<div className="wra-filter-bar">
											<div id="filter-bar" />
										</div>

										<div className="flex-sb-m flex-w p-t-16">
											<div className="w-size11">
												{/* <!-- Button --> */}
												<button className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4">Filter</button>
											</div>

											<div className="s-text3 p-t-10 p-b-10">
												Range: $<span id="value-lower">610</span> - $<span id="value-upper">980</span>
											</div>
										</div>
									</div>

									<div className="filter-color p-t-22 p-b-50 bo3">
										<div className="m-text15 p-b-12">Color</div>

										<ul className="flex-w">
											<li className="m-r-10">
												<input className="checkbox-color-filter" id="color-filter1" type="checkbox" name="color-filter1" />
												<label className="color-filter color-filter1" htmlFor="color-filter1" />
											</li>

											<li className="m-r-10">
												<input className="checkbox-color-filter" id="color-filter2" type="checkbox" name="color-filter2" />
												<label className="color-filter color-filter2" htmlFor="color-filter2" />
											</li>

											<li className="m-r-10">
												<input className="checkbox-color-filter" id="color-filter3" type="checkbox" name="color-filter3" />
												<label className="color-filter color-filter3" htmlFor="color-filter3" />
											</li>

											<li className="m-r-10">
												<input className="checkbox-color-filter" id="color-filter4" type="checkbox" name="color-filter4" />
												<label className="color-filter color-filter4" htmlFor="color-filter4" />
											</li>

											<li className="m-r-10">
												<input className="checkbox-color-filter" id="color-filter5" type="checkbox" name="color-filter5" />
												<label className="color-filter color-filter5" htmlFor="color-filter5" />
											</li>

											<li className="m-r-10">
												<input className="checkbox-color-filter" id="color-filter6" type="checkbox" name="color-filter6" />
												<label className="color-filter color-filter6" htmlFor="color-filter6" />
											</li>

											<li className="m-r-10">
												<input className="checkbox-color-filter" id="color-filter7" type="checkbox" name="color-filter7" />
												<label className="color-filter color-filter7" htmlFor="color-filter7" />
											</li>
										</ul>
									</div>

									<div className="search-product pos-relative bo4 of-hidden">
										<input
											className="s-text7 size6 p-l-23 p-r-50"
											type="text"
											name="search-product"
											placeholder="Search Products..."
										/>

										<button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
											<i className="fs-12 fa fa-search" aria-hidden="true" />
										</button>
									</div>
								</div>
							</div>

							<div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
								{/* <!--  --> */}
								<div className="flex-sb-m flex-w p-b-35">
									<div className="flex-w">
										<div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
											<select className="selection-2" name="sorting" onChange={this.handleDefaultSorting}>
												<option value="default">Default Sorting</option>
												{/* <option>Popularity</option> */}
												<option value="lth">Price: low to high</option>
												<option value="htl">Price: high to low</option>
											</select>
										</div>

										<div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
											<select className="selection-2" name="sorting" onChange={this.handlePriceSorting}>
												<option>Price</option>
												<option value="0-50">$0.00 - $50.00</option>
												<option value="50-100">$50.00 - $100.00</option>
												<option value="100-150">$100.00 - $150.00</option>
												<option value="150-200">$150.00 - $200.00</option>
												<option value="200-10000">$200.00+</option>
											</select>
										</div>
									</div>

									<span className="s-text8 p-t-5 p-b-5">Showing 1–12 of 16 results</span>
								</div>

								{/* <!-- Product --> */}
								<div className="row">
									{productsDisplayed.map(product => (
										<div className="col-sm-12 col-md-6 col-lg-4 p-b-50" key={product._id}>
											{/* <!-- Block2 --> */}
											<div className="block2">
												<div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
													<img src={product.image} alt="IMG-PRODUCT" />

													<div className="block2-overlay trans-0-4">
														<a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
															<i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
															<i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
														</a>

														<div className="block2-btn-addcart w-size1 trans-0-4">
															{/* <!-- Button --> */}
															<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
																Add to Cart
															</button>
														</div>
													</div>
												</div>

												<div className="block2-txt p-t-20">
													<a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
														{product.name}
													</a>

													<span className="block2-price m-text6 p-r-5">{product.price}</span>

													{/* <span className="block2-newprice m-text8 p-r-5">$15.90</span> */}
												</div>
											</div>
										</div>
									))}
								</div>

								{/* <!-- Pagination -->  */}
								<div className="pagination flex-m flex-w p-t-26">
									<a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">
										1
									</a>
									<a href="#" className="item-pagination flex-c-m trans-0-4">
										2
									</a>
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
							<img className="h-size2" src="./images/icons/paypal.png" alt="IMG-PAYPAL" />
						</a>

						<a href="#">
							<img className="h-size2" src="./images/icons/visa.png" alt="IMG-VISA" />
						</a>

						<a href="#">
							<img className="h-size2" src="./images/icons/mastercard.png" alt="IMG-MASTERCARD" />
						</a>

						<a href="#">
							<img className="h-size2" src="./images/icons/express.png" alt="IMG-EXPRESS" />
						</a>

						<a href="#">
							<img className="h-size2" src="./images/icons/discover.png" alt="IMG-DISCOVER" />
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

// console.log('process.env.VERSION', process.env.VERSION);
// console.log('process.env.PLATFORM', process.env.PLATFORM);
// console.log('process.env.NODE_ENV', process.env.NODE_ENV);

ReactDOM.render(<App />, document.getElementById('app'));
