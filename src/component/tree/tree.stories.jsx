import { TreeComponent } from './tree';
import dummyIcon from 'images/dummy_icon.svg'

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
    {
      text: '이것은 한글', icon: <img src={dummyIcon} />, disabled: true,
      TreeItemProps: [
        { text: 'NumberEleven', disabled: true },
        { text: 'NumberTwelve', disabled: true },
        { text: 'NumberThirty', icon: <img src={dummyIcon} />, disabled: true },
        { text: 'NumberFourty', icon: <img src={dummyIcon} />, disabled: true },
      ],
    },
    {
      text: 'Numbertwo', icon: <img src={dummyIcon} />,
      disabled: false,
      TreeItemProps: [
        { text: 'NumberThree', icon: <img src={dummyIcon} />, disabled: true },
        { text: 'NumberFour', icon: <img src={dummyIcon} />, disabled: true },
        { text: 'NumberFive', icon: <img src={dummyIcon} />, disabled: true },
        {
          text: 'NumberSix', icon: <img src={dummyIcon} />, disabled: true,
          TreeItemProps: [
            {
              text: 'NumberSeven', disabled: true,
              TreeItemProps: [
                { text: 'NumberEleven', disabled: true },
                { text: 'NumberTwelve', disabled: true },
                { text: 'NumberThirty', icon: <img src={dummyIcon} />, disabled: true },
                { text: 'NumberFourty', icon: <img src={dummyIcon} />, disabled: true },
              ],
            },
            { text: 'NumberEight', disabled: true },
            { text: 'NumberNine', icon: <img src={dummyIcon} />, disabled: true },
            {
              text: 'NumberTen', icon: <img src={dummyIcon} />, disabled: true, TreeItemProps: [
                { text: 'NumberEleven', disabled: true },
                { text: 'NumberTwelve', disabled: true },
                { text: 'NumberThirty', icon: <img src={dummyIcon} />, disabled: true },
                {
                  text: 'NumberFourty', icon: <img src={dummyIcon} />, disabled: true, TreeItemProps: [
                    { text: 'NumberEEEEEEEEE', disabled: true },
                    { text: 'NumberRRRRRRRRR', disabled: true },
                    { text: 'NumberTTTTTTTTT', icon: <img src={dummyIcon} />, disabled: true },
                    { text: 'NumberYYYYYYYYY', icon: <img src={dummyIcon} />, disabled: true },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
