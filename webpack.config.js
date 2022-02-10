const path = require('path');

module.exports = {

    mode: 'development',

    devtool: 'eval-source-map',

    entry: './src/index.ts',

    module:{
        rules :[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/
            }
        ],
    },

    resolve: {
        extensions: ['.ts','.js']
    },

    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    }

}