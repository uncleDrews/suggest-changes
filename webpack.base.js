module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env',{ targets: { browsers: ['last 2 versions']}}]
                    ],
                    plugins: ["transform-decorators-legacy"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'autoprefixer-loader',
                        options: {
                            browsers: 'last 2 version'
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
        ],
    }
};