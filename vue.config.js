// module.exports = {
//     css: {
//         loaderOptions: {
//             sass: {
//                 prependData: `@import "@/assets/scss/global.scss";`,
//             },
//         },
//     },
// };
module.exports = {
        chainWebpack: config => {
            config.module.rules.delete('eslint');
        },
    css: {
        loaderOptions: {
            sass: {
                additionalData: 
          `@import "@/assets/scss/global.scss";`
        
            }
        }
    }
};