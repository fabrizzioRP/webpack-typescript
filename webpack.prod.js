const path = require('path');

module.exports = {

    mode: 'production',

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