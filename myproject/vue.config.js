const webpack = require('webpack');
const Dotenv = require('dotenv-webpack')
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            }),
            new Dotenv()
        ]
    }
}
