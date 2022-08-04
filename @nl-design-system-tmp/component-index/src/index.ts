export interface DesignSystemComponent {
  id: string;
  name: string;
  aliases?: string[];
  communityDocs?: CommunityDocumentation[];
  implementations?: ComponentImplementation[];
  preview?: string;
  backlog: string;
  state: COMPONENT_STATES;
}

export interface CommunityDocumentation {
  type: DOCUMENTATION_TYPES;
  organisation: ORGANISATIONS;
  href: string;
}

export interface ComponentImplementation {
  organisation: ORGANISATIONS;
  type: COMPONENT_TYPES;
  implementation: string;
  package?: string;
  story?: string;
}

export enum COMPONENT_TYPES {
  CSS = 'CSS',
  HTML = 'HTML',
  WEB_COMPONENT = 'Web Component',
  REACT = 'React',
  VUE = 'Vue',
  ANGULAR = 'Angular',
  FIGMA = 'Figma',
}

export enum ORGANISATIONS {
  DEN_HAAG = 'Gemeente Den Haag',
  UTRECHT = 'Gemeente Utrecht',
  NLDS = 'NL Design System',
}

export enum COMPONENT_STATES {
  TODO = 'Help Wanted',
  COMMUNITY = 'Community',
  NL_UNSTABLE = 'Candidate',
  NL_STABLE = 'Hall of fame',
}

export enum DOCUMENTATION_TYPES {
  UX = 'UX',
  A11Y = 'A11y',
  COPY = 'Content richtlijnen',
}

export const componentIndex: DesignSystemComponent[] = [
  {
    id: 'accordion',
    name: 'Accordion',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/Accordion/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        package: '@gemeente-denhaag/accordion',
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Accordion/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/docs/css-surfaces-accordion--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1585%3A0',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=2713%3A5947',
      },
    ],
    preview: '/img/componenten/accordion.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/102',
  },
  {
    id: 'text-input',
    name: 'Text input',
    aliases: ['text-field'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/TextField/README.md',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/utrecht/tree/main/components/textbox/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        package: '@gemeente-denhaag/textfield',
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/TextField/src/index.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-input-textfield--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/textbox/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-textbox--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        package: '@gemeente-denhaag/textfield',
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/TextField/src/index.scss',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/textbox/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-textbox--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/Utrecht-Design-System?node-id=302%3A3975',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/textbox/web-component',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-textbox--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=0%3A1',
      },
    ],
    preview: '/img/componenten/text-input.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/5',
  },
  {
    id: 'status-badge',
    name: 'Status badge',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/blob/main/components/badge-status/css/index.scss',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-status-badge--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/Components?node-id=102%3A200',
      },
    ],
    preview: '/img/componenten/status-badge.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/6',
  },
  {
    id: 'counter-badge',
    name: 'Counter badge',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/BadgeCounter/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/BadgeCounter/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-badge-counter--default-story',
        package: '@gemeente-denhaag/badge-counter',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/badge-counter/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-counter-badge--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/badge-counter/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-counter-badge--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/NLDS-Components?node-id=264%3A84',
      },
    ],
    preview: '/img/componenten/counter-badge.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/7',
  },
  {
    id: 'backlink',
    name: 'Backlink',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=102%3A183',
      },
    ],
    preview: '/img/componenten/backlink.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/8',
  },
  {
    id: 'notification',
    name: 'Notification',
    aliases: ['alert'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/Alert/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Alert/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-alert--error',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=102%3A8',
      },
    ],
    preview: '/img/componenten/notification.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/9',
  },
  {
    id: 'expandable-region',
    name: 'Expandable region',
    aliases: ['collapse'],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/Components?node-id=102%3A169',
      },
    ],
    preview: '/img/componenten/collapse.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/10',
  },
  {
    id: 'switch',
    name: 'Switch',
    aliases: ['toggle', 'toggle-button', 'form-toggle'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/Switch/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/form-toggle/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-form-toggle--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/form-toggle/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-form-toggle--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Switch/src/index.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-input-switch--default',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=263%3A2',
      },
    ],
    preview: '/img/componenten/toggle.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/33',
  },
  {
    id: 'dropdown-listbox',
    name: 'Dropdown listbox',
    aliases: ['select'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/Select/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/select',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-select--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=264%3A102',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Select/src/index.tsx',
      },
    ],
    preview: '/img/componenten/select.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/34',
  },
  {
    id: 'date-picker',
    name: 'Date picker',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/Datepicker/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Datepicker/src/index.tsx',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/35',
  },
  {
    id: 'slider',
    name: 'Slider',
    aliases: ['range-input'],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/36',
  },
  {
    id: 'card',
    name: 'Card',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Card/src/Card/Card.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/docs/react-cards-card--default',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=282%3A105',
      },
    ],
    preview: '/img/componenten/card.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/37',
  },
  {
    id: 'button',
    name: 'Button',
    aliases: ['button-primary', 'button-secondary'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/utrecht/blob/main/components/button/docs/ux-guidelines.md',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: DOCUMENTATION_TYPES.A11Y,
        href: 'https://github.com/nl-design-system/utrecht/blob/main/components/button/docs/accessibility.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/button/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-button--button',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/button/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-button--button',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/button/web-component',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-button--button',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Button',
        story: 'https://nl-design-system.github.io/denhaag/?path=/docs/css-input-button--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=151%3A92',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1%3A656',
      },
    ],
    preview: '/img/componenten/button.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/38',
  },
  {
    id: 'table',
    name: 'Table',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Table',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-table--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/table/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-table--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/table/css',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/table/web-component',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-table--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=2480%3A3647',
      },
    ],
    preview: '/img/componenten/table.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/39',
  },
  {
    id: 'text-area',
    name: 'Textarea',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/TextArea/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/textarea/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-textarea--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/textarea/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-textarea--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/TextArea',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-input-text-area--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=7062%3A17687',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=264%3A208',
      },
    ],
    preview: '/img/componenten/textarea.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/40',
  },
  {
    id: 'step-indicator',
    name: 'Step indicator',
    aliases: ['form-progress'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/FormProgress',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-input-form-progress--default-story',
      },
    ],
    preview: '/img/componenten/process-steps.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/41',
  },
  {
    id: 'progress-tracker',
    name: 'Progress tracker',
    aliases: ['progress-bar', 'progress-indicator'],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=282%3A99',
      },
    ],
    preview: '/img/componenten/progress.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/42',
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/50',
  },
  {
    id: 'tabs',
    name: 'Tabs',
    aliases: ['tab'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/tree/main/components/Tab/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Tab/src/Tabs.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-navigation-tab--default',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=5020%3A18454',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=1140%3A211',
      },
    ],
    preview: '/img/componenten/tabs.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/51',
  },
  {
    id: 'main-navigation',
    name: 'Main navigation',
    aliases: ['top-nav'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/navigatie%20topnav/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-topnav--default-story',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/52',
  },
  {
    id: 'sub-navigation',
    name: 'Sub navigation',
    aliases: ['side-nav'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/navigatie%20sidenav/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-sidenav--default-story',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/53',
  },
  {
    id: 'breadcrumb-navigation',
    name: 'Breadcrumb navigation',
    aliases: ['breadcrumb-bar'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/blob/main/components/Breadcrumb/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Breadcrumb',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-breadcrumb--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/breadcrumb/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-breadcrumb--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/breadcrumb/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-breadcrumb--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=288%3A0',
      },
    ],
    preview: '/img/componenten/breadcrumbs.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/54',
  },
  {
    id: 'page-header',
    name: 'Page header',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/page-header/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-page-header--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/page-header/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-page-header--default-story',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/55',
  },
  {
    id: 'page-footer',
    name: 'Page footer',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/page-footer/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-page-footer--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/page-footer/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-page-footer--default-story',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/56',
  },
  {
    id: 'list',
    name: 'List',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/58',
  },
  {
    id: 'favicon',
    name: 'Favicon',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/favicon/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-favicon--favicon',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/61',
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/custom-checkbox/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-custom-checkbox--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/checkbox/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-checkbox--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation:
          'https://github.com/nl-design-system/utrecht/tree/main/components/custom-checkbox/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-custom-checkbox--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Checkbox',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-input-checkbox--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1450%3A4570',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=102%3A209',
      },
    ],
    preview: '/img/componenten/checkbox.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/64',
  },
  {
    id: 'radio-button',
    name: 'Radio button',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/tree/main/components/Radio/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/radio-button/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-radio-button--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/radio-button/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-radio-button--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Radio/src/index.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-input-radio-radio--default',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Radio/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-input-radio--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=102%3A244',
      },
    ],
    preview: '/img/componenten/radio-button.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/65',
  },
  {
    id: 'modal-dialog',
    name: 'Modal dialog',
    aliases: ['modal'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/tree/main/components/Modal',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Modal/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-feedback-modal--default-story',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/66',
  },
  {
    id: 'video-player',
    name: 'Video player',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/69',
  },
  {
    id: 'figure',
    name: 'Figure',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/70',
  },
  {
    id: 'file-upload',
    name: 'File upload',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=10817%3A61351',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/72',
  },
  {
    id: 'quote',
    name: 'Quote',
    aliases: ['blockquote'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/blockquote/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-blockquote--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/blockquote/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-blockquote--default-story',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/73',
  },
  {
    id: 'skip-link',
    name: 'Skip link',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/74',
  },
  {
    id: 'spinner',
    name: 'Spinner',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/75',
  },
  {
    id: 'avatar',
    name: 'Avatar',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/83',
  },
  {
    id: 'definition-list',
    name: 'Definition list',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=282%3A108',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/92',
  },
  {
    id: 'text-badge',
    name: 'Text badge',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/94',
  },
  {
    id: 'dot-indicator',
    name: 'Dot indicator',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/DotIndicator/src',
        story:
          'https://nl-design-system.github.io/denhaag/?path=/story/react-data-display-dot-indicator--indicator-on-rectangle',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=318%3A138',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/98',
  },
  {
    id: 'status-light',
    name: 'Status light',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/99',
  },
  {
    id: 'link-card',
    name: 'Link card',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/101',
  },
  {
    id: 'pagination',
    name: 'Pagination',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/tree/main/components/Pagination/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Pagination/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-pagination--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/blob/main/components/Pagination/src/index.tsx',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.FIGMA,
        implementation:
          'https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1673%3A231',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=403%3A100',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/106',
  },
  {
    id: 'headings',
    name: 'Headings',
    aliases: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/heading/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-1--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/heading/web-component',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-heading--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=2365%3A2035',
      },
    ],
    preview: '/img/componenten/headings.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/114',
  },
  {
    id: 'paragraph',
    name: 'Paragraph',
    aliases: ['paragraaf', 'text'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-paragraph--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-paragraph--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-paragraph--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=2374%3A2086',
      },
    ],
    preview: '/img/componenten/paragraph.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/115',
  },
  {
    id: 'unordered-list',
    name: 'Unordered list',
    aliases: ['ul'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/unordered-list/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-unordered-list--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/unordered-list/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-unordered-list--default-story',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/116',
  },
  {
    id: 'ordered-list',
    name: 'Ordered list',
    aliases: ['ol'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/ordered-list/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-ordered-list--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/ordered-list/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-ordered-list--default-story',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/117',
  },
  {
    id: 'link',
    name: 'Link',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/link/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-link--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/link/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-link--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Link/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-link--link',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Link/src/index.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-navigation-link--default-story',
      },
      {
        organisation: ORGANISATIONS.NLDS,
        type: COMPONENT_TYPES.FIGMA,
        implementation: 'https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=2500%3A3787',
      },
    ],
    preview: '/img/componenten/text-link.svg',
    backlog: 'https://github.com/nl-design-system/backlog/issues/118',
  },
  {
    id: 'separator',
    name: 'Separator',
    aliases: ['divider'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/denhaag/tree/main/components/Divider/README.md',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: DOCUMENTATION_TYPES.UX,
        href: 'https://github.com/nl-design-system/utrecht/tree/main/components/separator/README.md',
      },
    ],
    implementations: [
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Divider/src/index.scss',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-divider--default-story',
      },
      {
        organisation: ORGANISATIONS.DEN_HAAG,
        type: COMPONENT_TYPES.REACT,
        implementation: 'https://github.com/nl-design-system/denhaag/tree/main/components/Divider/src/index.tsx',
        story: 'https://nl-design-system.github.io/denhaag/?path=/story/react-data-display-divider--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/separator/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-separator--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/separator/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-separator--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.WEB_COMPONENT,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/separator/web-component',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-separator--default-story',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/119',
  },
  {
    id: 'label',
    name: 'Label',
    aliases: ['form-label'],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/form-label/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-form-label--default-story',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/form-label/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-form-label--default-story',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/121',
  },
  {
    id: 'form-error',
    name: 'Form error',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/122',
  },
  {
    id: 'captcha',
    name: 'CAPTCHA',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/123',
  },
  {
    id: 'fieldset',
    name: 'Fieldset',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/124',
  },
  {
    id: 'numeric-form-input',
    name: 'Numeric form input',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/125',
  },
  {
    id: 'rich-text-content',
    name: 'Rich text content',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/127',
  },
  {
    id: 'checkbox-group',
    name: 'Checkbox group',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/128',
  },
  {
    id: 'radio-button-group',
    name: 'Radio button group',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/129',
  },
  {
    id: 'character-limit-counter',
    name: 'Character limit counter',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/130',
  },
  {
    id: 'confirm-checkbox',
    name: 'Confirm checkbox',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/131',
  },
  {
    id: 'password-input',
    name: 'Password input',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/133',
  },
  {
    id: 'web-page-title',
    name: 'Web page title',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/135',
  },
  {
    id: 'geographic-map',
    name: 'Geographic map',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/136',
  },
  {
    id: 'foreign-language-content',
    name: 'Foreign language content',
    aliases: [],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/137',
  },
  {
    id: 'strong-emphasis',
    name: 'Strong emphasis',
    aliases: [],
    state: COMPONENT_STATES.COMMUNITY,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/css',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-emphasis--strong',
      },
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.HTML,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/html',
        story: 'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-emphasis--strong',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/138',
  },
  {
    id: 'language-switcher',
    name: 'Language switcher',
    aliases: ['alternate-lang-nav'],
    state: COMPONENT_STATES.TODO,
    communityDocs: [],
    implementations: [
      {
        organisation: ORGANISATIONS.UTRECHT,
        type: COMPONENT_TYPES.CSS,
        implementation: 'https://github.com/nl-design-system/utrecht/tree/main/components/alternate-lang-nav/css',
        story:
          'https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-alternate-lang-nav--alternative-languages-navigation',
      },
    ],
    preview: '',
    backlog: 'https://github.com/nl-design-system/backlog/issues/140',
  },
];

export default componentIndex;
