import { Label, MultiStepContainer, Step, Steps } from './styles'

const MAX_STEPS = 32

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  if (size > MAX_STEPS) {
    size = MAX_STEPS
  }

  if (currentStep > size) {
    currentStep = size
  }

  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}{' '}
      </Label>
      <Steps
        css={{
          '--steps-size': size,
        }}
      >
        {Array.from({ length: size }, (_, i) => ++i).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
