const sidebar = [
  { type: 'doc', id: 'project/kernteam' },
  {
    type: 'category',
    label: 'Events',
    collapsible: true,
    link: {
      type: 'generated-index',
      title: 'Events',
      slug: '/project/events/overzicht',
    },
    items: [
      {
        type: 'category',
        label: 'Design Systems Week 2023',
        link: {
          type: 'generated-index',
          title: 'Design Systems Week 2023',
          slug: '/project/events/design-systems-week-2023/overzicht',
        },
        items: [
          {
            type: 'autogenerated',
            dirName: 'project/events/design-systems-week-2023',
          },
        ],
      },
      { type: 'doc', id: 'project/events/design-systems-week-2022' },
      { type: 'doc', id: 'project/events/heartbeat' },
    ],
  },
  { type: 'doc', id: 'project/blijf-op-de-hoogte' },
  { type: 'doc', id: 'project/links' },
];

module.exports = sidebar;
