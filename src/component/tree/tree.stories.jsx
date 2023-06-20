import { TreeComponent } from './tree';

export default {
  title: 'component/tree',
  component: TreeComponent,
  argTypes: {},
  decorators: [],
  parameters: {
    componentSubtitle: 'tree',
  },
};

const Template = args => <TreeComponent {...args} />;

export const TreeTemplate = Template.bind({});

TreeTemplate.args = {
  TreeItemProps: [
    { text: 'NumberOne', disabled: true },
    {
      text: 'NumberOne',
      disabled: false,
      TreeItemProps: [
        { text: 'NumberOne', disabled: true },
        { text: 'NumberOne', disabled: true },
      ],
    },
  ],
};
