const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
    entry: path.resolve(__dirname, './src/index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.(ttf|woff|woff2|eot|svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
              },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'MindMap.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}


module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config = {
            ...config,
            entry: path.resolve(__dirname, './src/dev.ts'),
            plugins: [
                new HtmlWebpackPlugin({
                    title: 'MindMap',
                    template: 'src/index.html',
                }),
            ],
        }
    }
    return config
}