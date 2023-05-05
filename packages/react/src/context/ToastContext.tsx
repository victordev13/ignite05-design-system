import { ReactNode, createContext, useContext, useState } from 'react'
import { Toast } from '../components/Toast'
import { ToastContainer } from '../components/ToastContainer'

interface NewToast {
  title: string
  content: string
  duration?: number
}

interface ToastItem extends NewToast {
  id: number
}

interface ToastContextProps {
  addToast: (toast: NewToast) => void
}

interface ToastProviderProps {
  children: ReactNode
}

const ToastContext = createContext({} as ToastContextProps)

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const addToast = (toast: NewToast) => {
    setToasts((prevState) => [
      ...prevState,
      { ...toast, id: new Date().getTime() },
    ])
  }

  const removeToast = (id: number) => {
    setToasts((prevState) => prevState.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContainer>
      <ToastContext.Provider value={{ addToast }}>
        {toasts.map((t) => (
          <Toast
            key={t.id}
            title={t.title}
            content={t.content}
            duration={t.duration}
            onClose={() => removeToast(t.id)}
          />
        ))}
        {children}
      </ToastContext.Provider>
    </ToastContainer>
  )
}

export const useToast = () => useContext(ToastContext)
