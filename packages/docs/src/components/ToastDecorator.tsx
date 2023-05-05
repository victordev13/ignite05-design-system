import { Box, Button, ToastProps, useToast } from '@victordev-ignite-ui/react'

export const ToastDecorator = ({ ...args }: ToastProps) => {
  const { addToast } = useToast()

  return (
    <Box css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
      <Button onClick={() => addToast({ ...args })}>add toast</Button>
    </Box>
  )
}
