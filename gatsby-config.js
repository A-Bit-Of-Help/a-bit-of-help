const path = require("path");

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                // Override the file regex for SASS
                sassRuleTest: /\.global\.s(a|c)ss$/,
                // Override the file regex for CSS modules
                sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
            },
        },
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: true,
            },
        },
        {
            resolve: "gatsby-plugin-root-import",
            options: {
                api: path.join(__dirname, "src/api"),
                styles: path.join(__dirname, "src/styles"),
                components: path.join(__dirname, "src/components"),
                db: path.join(__dirname, "src/db"),
                assets: path.join(__dirname, "src/assets"),
                hooks: path.join(__dirname, "src/hooks"),
                constans: path.join(__dirname, "src/constans"),
            },
        },
    ],
};
