import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/home';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';

import './styles/main.less';

const history = syncHistoryWithStore(browserHistory, store);


class Application extends React.Component{
    render (){
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Router component={Layout}>
                        <Route path="/" component={Home} />
                    </Router>
                </Router>
            </Provider>
        );
    }
};

ReactDOM.render(<Application />, document.getElementById('app'));

module.hot.accept();