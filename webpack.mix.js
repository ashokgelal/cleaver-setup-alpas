let mix = require('laravel-mix')
const cssImport = require('postcss-import')
const cssNesting = require('postcss-nesting')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const resourcesPath = 'src/main/resources'
const publicPath = `${resourcesPath}/web`
const templatesPath = `${resourcesPath}/templates`

mix
    .setPublicPath(publicPath)
    .less(`${resourcesPath}/css/app.less`, 'css')
    .options({
        postCss: [
            cssImport(),
            cssNesting(),
            tailwindcss('./tailwind.config.js'),
            ...mix.inProduction() ? [
                purgecss({
                    content: [`${templatesPath}/**/*.peb`],
                    defaultExtractor: content => content.match(/[\w-/:.]+(?<!:)/g) || [],
                    whitelistPatternsChildren: [/nprogress/],
                }),
            ] : [],
        ],
    }).disableNotifications()
