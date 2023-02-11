import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        }}
      >
        <Text as="label" size="sm">
          Email address
        </Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Your e-mail address',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'github.com/',
  },
}
