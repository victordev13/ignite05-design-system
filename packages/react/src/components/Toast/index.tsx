import { X } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import { ComponentProps } from '../../types/ComponentProps'
import { ToastClose, ToastContainer, ToastContent, ToastTitle } from './styles'
import { colors } from '@victordev-ignite-ui/tokens'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  content: string
  duration?: number
  onClose?: () => void
}

export function Toast({
  title,
  content,
  onClose,
  duration = 3000,
  ...props
}: ToastProps) {
  const [isOpen, setIsOpen] = useState(true)

  const timeRef = useRef<number | ReturnType<typeof setTimeout>>(0)

  useEffect(() => {
    timeRef.current = setTimeout(() => {
      setIsOpen(false)
    }, duration)

    return () => {
      clearTimeout(timeRef.current)
    }
  })

  return (
    <ToastContainer open={isOpen} onOpenChange={setIsOpen}>
      <ToastTitle>{title}</ToastTitle>
      <ToastClose aria-label="Close">
        <Button
          variant="clean"
          size="xs"
          onClick={() => {
            setIsOpen(false)
            setTimeout(() => {
              if (onClose) onClose()
            }, 200)
          }}
          fitContent
        >
          <X aria-hidden color={colors.gray100} size={20} weight="bold" />
        </Button>
      </ToastClose>
      <ToastContent {...props}>{content}</ToastContent>
    </ToastContainer>
  )
}

Toast.baseName = 'Toast'
