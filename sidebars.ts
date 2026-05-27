import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    docs: [
      {
        type: 'category',
        label: 'General (ALL)',
        collapsible: true,
        collapsed: false,
        items: [
          'general/general-1',
          'general/general-2',
          'general/general-3',
          'general/general-4',
        ],
      },
      {
        type: 'category',
        label: 'Sixes (6v6)',
        collapsible: true,
        collapsed: false,
        items: [
          'sixes/sixes-1',
          'sixes/sixes-2',
        ],
      },
      {
        type: 'category',
        label: 'Highlander (9v9)',
        collapsible: true,
        collapsed: false,
        items: [
          'highlander/highlander-1',
          'highlander/highlander-2',
        ],
      },
      {
        type: 'category',
        label: 'Others',
        collapsible: true,
        collapsed: false,
        items: [
          'others/servers',
          'others/punishments',
        ],
      },
    ],
};

export default sidebars;
