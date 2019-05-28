import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsIndex from './components/ProductsIndex';
import ProductDetail from './components/ProductDetail';

class App extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={ProductsIndex} />
					<Route exact path="/product" component={ProductsIndex} />
					<Route path="/product-detail/:id" component={ProductDetail} />
				</Switch>
			</div>
		);
	}
}

export default App;
