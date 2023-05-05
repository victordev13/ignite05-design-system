import * as Toast from '@radix-ui/react-toast'

import { styled, keyframes } from '../../styles'

/** animations */
const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 25px))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + 25px))',
  },
})
/** end animations */

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  fontFamily: '$default',
  fontSize: '$xs',
  padding: '$3 $3 $3 $4',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  color: '$gray100',

  display: 'grid',
  gridTemplateColumns: '1fr min-content',
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$xl',
  fontWeight: '$bold',
})

export const ToastContent = styled(Toast.Description, {
  color: '$gray200',
  lineHeight: '$short',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
})
