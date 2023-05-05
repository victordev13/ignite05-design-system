import * as ToastPrimitive from '@radix-ui/react-toast'
import { ReactNode } from 'react'
import { ToastContainerViewport } from './styles'

interface ToastContainerProps {
  children: ReactNode
}

export function ToastContainer({ children }: ToastContainerProps) {
  return (
    <ToastPrimitive.Provider>
      {children}
      <ToastContainerViewport />
    </ToastPrimitive.Provider>
  )
}
