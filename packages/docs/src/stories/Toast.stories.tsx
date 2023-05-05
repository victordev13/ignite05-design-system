import type { Meta, StoryObj } from '@storybook/react'
import {
  Toast,
  ToastProps,
  ToastProvider,
  ToastContainer,
} from '@victordev-ignite-ui/react'
import { ToastDecorator } from '../components/ToastDecorator'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    duration: 300000,
    title: 'Agendamento realizado',
    content: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    duration: {
      table: {
        type: {
          summary: 'numero inteiro em ms',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Deve ser utilizado com o `ToastContainer` ou através do hook `useToast`',
      },
    },
  },
  decorators: [(Story) => <ToastContainer>{Story()}</ToastContainer>],
} as Meta<ToastProps>

export const UsageExample: StoryObj<ToastProps> = {
  args: {
    duration: 300000,
    title: 'Agendamento realizado',
    content: 'Quarta-feira, 23 de Outubro às 16h',
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <ToastDecorator {...(Story().props as ToastProps)} />
      </ToastProvider>
    ),
  ],
}
