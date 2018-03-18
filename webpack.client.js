const path = require("path");
const merge = require("webpack-merge");
const baseConf = require("./webpack.base");

const config  = {
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client/dist')
    }
};

module.exports = merge(config,baseConf);