import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@victordev-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    trigger: <Button>trigger</Button>,
    content: 'default',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
