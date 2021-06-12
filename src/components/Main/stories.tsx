import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Boilerplate',
    description: 'Typescript, ReactJs, NextJs e Styled Components',
  },
} as Meta

export const Default: Story = (args) => <Main {...args} />
export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Example Title',
  description: 'Example Description',
}
