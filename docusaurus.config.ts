import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'matcha.tf Ruleset',
  tagline: 'This website contains ruleset which are hosted by members from matcha.tf',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future

  // Set the production url of your site here
  url: 'https://rules.matcha.tf',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'matcha.tf Rules',
      items: [
        {
          type: 'doc',
          docId: 'general/general-1',
          position: 'left',
          label: 'General Rules',
        },
        {
          type: 'doc',
          docId: 'sixes/sixes-1',
          position: 'left',
          label: 'Sixes (6v6)',
        },
        {
          type: 'doc',
          docId: 'highlander/highlander-1',
          position: 'left',
          label: 'Highlander',
        },
        {
          type: 'doc',
          docId: 'others/servers',
          position: 'left',
          label: 'Servers',
        },
        {
          href: 'https://github.com/Matcha-Bookable/matchatf-ruleset',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'General Rules',
              to: '/docs/general/general-1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://matcha.tf'
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'GitHub Ruleset',
              href: 'https://github.com/Matcha-Bookable/matchatf-ruleset',
            },
            {
              label: 'v1 API Documentation',
              href: 'https://matcha.tf/v1/docs',
            }
          ],
        },
      ],
      copyright: `Matcha Bookable (matcha.tf) © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
