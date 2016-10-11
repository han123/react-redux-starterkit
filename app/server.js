'use strict';

var path = require('path');
var express = require('express');

var app = express();
var port = 3000;

if (process.env.NODE_ENV !== 'production') {
    var webpack = require('webpack');
    var config = require('../config/webpack.config.babel.js');
    var compiler = webpack(config);


    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));


} else {
    app.use('/public', express.static(__dirname + '/public'));
}

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});





app.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else {
        if (process.env.NODE_ENV !== 'production') {
            console.info('==> server listening on port  %s, with webpack middleware', port);
        } else {
            console.info('==> server listening on port %s', port);
        }

    }
});