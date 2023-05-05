import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContainer } from './styles'
import { ComponentProps } from '../../types/ComponentProps'
import { ReactNode } from 'react'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  trigger: ReactNode
  content: string
}

export function Tooltip({ trigger, content, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{trigger}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContainer sideOffset={5} {...props}>
            {content}
            <TooltipArrow />
          </TooltipContainer>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.baseName = 'Tooltip'
