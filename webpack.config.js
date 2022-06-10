/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line no-undef
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                loader: "ts-loader",
                options: { transpileOnly: true }
            }
        ]
    }
};
