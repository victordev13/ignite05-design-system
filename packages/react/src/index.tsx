import { styled } from './styles'

const Button = styled('button', {
  width: '$3',
  fontFamily: '$default',
  background: '$gray600',
})

export const App = () => {
  return <Button>hello</Button>
}
