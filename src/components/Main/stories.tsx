import { withKnobs, text } from '@storybook/addon-knobs'
import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'Ellie.On - BoilerPlate')}
    description={text(
      'Description',
      'Typescript, ReactJs, NextJs e Styled Components'
    )}
  />
)
