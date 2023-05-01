import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@victordev-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/victordev13.png',
    alt: 'Victor',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
export const WithFallbackLight: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    fallbackTheme: 'light',
  },
}
