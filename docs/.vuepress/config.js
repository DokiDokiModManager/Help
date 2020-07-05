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
            disableThemeIgnore: true
        },
        algolia: {
            apiKey: '06941605ec04a113fc8db765ddff9b87',
            indexName: 'dokidokimodmanager'
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
                text: 'Changelog History',
                link: '/changelog/'
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
                    collapsable: false,
                    children: [
                        'getting-started/installation',
                        'getting-started/first-time-setup',
                        'getting-started/install-first-mod',
                        'getting-started/managing-mods',
                        'getting-started/basic-options'
                    ]
                },
                {
                    title: 'Reference',
                    collapsable: false,
                    children: [
                        'reference/mod-install-troubleshooting',
                        'reference/mod-packaging'
                    ]
                },
                {
                    title: 'Developers',
                    collapsable: false,
                    children: [
                        'developers/metadata',
                        'developers/sdk',
                        'developers/debugging',
                        'developers/developer-mode'
                    ]
                }
            ],
            '/changelog/': [
                '/changelog/',
                {
                    title: 'Changelog',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        'v4_1_0',
                        'v4_0_1',
                        'v4_0_0'
                    ]
                },
                {
                    title: 'Legacy',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        'v3_2_8',
                        'v3_2_7',
                        'v3_2_6',
                        'v3_2_5',
                        'v3_2_4',
                        'v3_2_3',
                        'v3_2_2',
                        'v3_2_1',
                        'v3_2_0',
                        'v3_1_2',
                        'v3_1_1',
                        'v3_1_0',
                        'v3_0_2',
                        'v3_0_1',
                        'v3_0_0'
                    ]
                }
            ]
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
