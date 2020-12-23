module.exports = {
  title: 'ashmortar.io',
  tagline: 'Personal Website, Blog and Portfolio for Aaron Ross',
  url: 'https://ashmortar.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/midi.svg',
  organizationName: 'ashmortar',
  projectName: 'docusaurus-blog',
  themeConfig: {
    algolia: {
      apiKey: '3f757a18aea136c56100bcf9e12b800d',
      indexName: 'netlify_3b6231e5-fa67-4015-9918-552aec670a68_main_all',
      appId: '8360ZGF9S6',
    },
    gtag: {
      trackingID: 'G-G9Z8YB7PP7',
      anonymizeIP: true,
    },
    navbar: {
      title: 'ashmortar.io',
      logo: {
        alt: 'Midi Keyboard',
        src: 'img/midi.svg',
      },
      items: [
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/ashmortar',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/aaronrosspdx/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Coding',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Repository',
              href: 'https://github.com/ashmortar/docusaurus-blog',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/aaronrosspdx/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Gondo_plus',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/ashmortar/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aaron Ross, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Rambling On',
          blogDescription: 'Musings of a Polymath',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Previous Ramblings',
          postsPerPage: 10,
          feedOptions: {
            type: 'all',
            title: 'Rambling On',
            description: 'Musings of a Polymath',
          },
          editUrl: 'https://github.com/ashmortar/docusaurus-blog/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
