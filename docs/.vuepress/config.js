module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'DDMM Help',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: 'Help and documentation for Doki Doki Mod Manager',

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    theme: 'yuu',

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        yuu: {
            disableThemeIgnore: true,
            defaultColorTheme: 'purple'
        },
        sidebarDepth: 3,
        repo: 'DokiDokiModManager/Help',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: '',
        lastUpdated: true,
        nav: [
            {
                text: 'User Guide',
                link: '/user-guide/',
            },
            {
                text: 'Developer Guide',
                link: '/developer-guide/'
            },
            {
                text: 'DDMM Homepage',
                link: 'https://doki.space'
            }
        ],
        sidebar: {
            '/user-guide/': [
                {
                    title: 'Welcome',
                    collapsable: false,
                    children: ['']
                },
                {
                    title: 'Getting Started',
                    collapsable: true,
                    children: [
                        'installation',
                        'first-time-setup',
                        'install-first-mod'
                    ]
                },
                {
                    title: 'Advanced',
                    collapsable: true,
                    children: []
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
