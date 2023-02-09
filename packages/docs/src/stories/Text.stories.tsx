import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'lorem ipsum',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomStrongTag: StoryObj<TextProps> = {
  args: {
    size: 'md',
    as: 'strong',
  },
}
