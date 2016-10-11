import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Layout from './components/Layout';
import EventsMain from './pages/home';


class Application extends React.Component{
    render (){
        return (
            <Router history={browserHistory}>
                <Router component={Layout}>
                    <Route path="/" component={EventsMain} />
                </Router>
            </Router>
        );
    }
};

ReactDOM.render(<Application />, document.getElementById('app'));

module.hot.accept();
