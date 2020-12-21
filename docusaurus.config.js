module.exports = {
  title: 'ashmortar.io',
  tagline: 'Personal Website, Blog and Portfolio for Aaron Ross',
  url: 'https://ashmortar.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/midi.svg',
  organizationName: 'ashmortar', // Usually your GitHub org/user name.
  projectName: 'my-site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ashmortar.io',
      logo: {
        alt: 'Midi Keyboard',
        src: 'img/midi.svg',
      },
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ashmotar',
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
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
