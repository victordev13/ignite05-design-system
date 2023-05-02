import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideDown = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideUp = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(10px)',
  },
  to: {
    opaticiy: 1,
    transform: 'translateY(0)',
  },
})

export const TooltipContainer = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  fontFamily: '$default',
  fontSize: '$xs',
  padding: '$3 $4',
  borderRadius: '$sm',
  color: '$gray100',

  animationName: `${slideUp}`,
  animationDuration: '0.3s',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',

  '&[data-side="top"]': {
    animationName: slideUp,
  },

  '&[data-side="bottom"]': {
    animationName: slideDown,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
