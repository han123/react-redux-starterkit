import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.less';

class Application extends React.Component{
    render (){
        return (
            <div>
                Application
            </div>
        );
    }
};

ReactDOM.render(<Application />, document.getElementById('app'));

module.hot.accept();
