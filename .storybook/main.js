/**
 * @name: main.js
 * @author: wy
 * @date: 20200917 18:34
 * @description：main.js
 * @update: 20200917 18:34
 */
const path = require("path");
module.exports = {
    stories: ['../stories/**/*.stories.js', '../stories/*.stories.js'],
    addons: [
        {
            name: "@storybook/addon-storysource",
            options: {
                rule: {
                    // test: [/\.stories\.jsx?$/], This is default
                    include: [path.resolve(__dirname, "../stories")], // 找到自己存放stories的文件夹
                },
                loaderOptions: {
                    prettierConfig: { printWidth: 80, singleQuote: false },
                },
            },
        },
    ],
};
